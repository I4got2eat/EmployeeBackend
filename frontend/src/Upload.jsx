import React, { useState } from "react";
import Papa from "papaparse";
import { EmployeeTable } from "./EmployeeTable";

export const Upload = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [response, setResponse] = useState("");
  const [empty, setEmpty] = useState(false);


  const handleChange = (e) => {
    setData(e);
  };

  const handleUpload = (e) => {
    setEmpty(false);
    setToggle(false);
    setError(false);
    fetch("http://localhost:8080/database/delete", {
      method: "DELETE",
      body: null,
    }).then((res) => {});

    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        let dataArray = [];
        result.data.forEach((element) => {
          dataArray.push(JSON.stringify(element));
        });

        if(dataArray.length ===0){
          setEmpty(true);
        };


        for (var i = 0; i < dataArray.length; i++) {
          fetch("http://localhost:8080/database/post", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: dataArray[i],
          }).then((res) => {
            res
              .text()
              .then((rez) => {
                let responseContainer = JSON.parse(rez).message;
                if (responseContainer !== undefined) {
                  setResponse(responseContainer);
                  setError(true);
                }
              })
              .catch(res);

            if (res.status === 200) {
              setToggle(true);
            }
          });
        }
      },
    });
  };

  return (
    <>
      <form>
        <input
          className="UploadField"
          accept=".csv"
          type={"file"}
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
      <button onClick={() => handleUpload(data)} type={"button"}>
        Upload
      </button>

      {empty ? (<h2 className="error">The file is empty
      <span title="The uploaded file has no readble content">
              <img
                className="logo"
                src="data:image/png;base64,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"
                alt="info"
              />
            </span></h2>):(<></>)}

      {error ? (
        <>
          <h2 className="error">
            The file contains a {response}(s)
            <span title="The file contains illegal or empty value(s) such as misspelled email address or phone number. All legal content will be uploaded if there is any">
              <img
                className="logo"
                src="data:image/png;base64,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"
                alt="info"
              />
            </span>
          </h2>
        </>
      ) : (
        <></>
      )}

      {toggle ? <EmployeeTable /> : <></>}
    </>
  );
};
