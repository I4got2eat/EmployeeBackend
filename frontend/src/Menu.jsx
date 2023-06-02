import React, { useState, useCallback } from "react";
import Papa from "papaparse";
import { EmployeeTable } from "./EmployeeTable";

const DELETE_URL = "http://localhost:8080/database/delete";
const POST_URL = "http://localhost:8080/database/post";

const Upload = () => {
  const [state, setState] = useState({
    error: false,
    data: [],
    toggle: false,
    empty: false,
  });

  const handleChange = useCallback((e) => {
    setState((prevState) => ({ ...prevState, data: e }));
  }, []);

  const handleUpload = (e) => {
    setState((prevState) => ({
      ...prevState,
      empty: false,
      toggle: false,
      error: false,
    }));

    fetch(DELETE_URL, {
      method: "DELETE",
      body: null,
    });

    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        const dataArray = result.data.map((element) => JSON.stringify(element));

        if (dataArray.length === 0) {
          setState((prevState) => ({ ...prevState, empty: true }));
          return;
        }

        const fetchPromises = dataArray.map((dataItem) =>
          fetch(POST_URL, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: dataItem,
          })
        );

        Promise.allSettled(fetchPromises).then((results) => {
          const hasError = results.some(
            (result) =>
              result.status === "rejected" ||
              ( result.value.ok !== true)
          );
            if(hasError){
            setState((prevState) => ({
              ...prevState,
              error: true,
              }));
            setState((prevState) => ({ ...prevState, toggle: true }));
           }else{
            setState((prevState) => ({ ...prevState, toggle: true }));
           }
        });
      },
    });
  };

  return (
    <>
      <form>
        <input
          className="UploadField"
          accept=".csv"
          type="file"
          onChange={handleChange}
        />
      </form>
      <button onClick={() => handleUpload(state.data)} type="button">
        Upload
      </button>
      {state.error && (
        <h2 className="error">
          The file contains illegal or empty values
        </h2>
      )}

      {state.toggle && <EmployeeTable />}
    </>
  );
};

export default Upload;
