import React, { useState, useCallback } from "react";
import Papa from "papaparse";
import { EmployeeTable } from "./EmployeeTable";
import { EMPLOYEES_URL } from "./URLS";

const Menu = () => {
  const [state, setState] = useState({
    error: false,
    data: [],
    toggle: false,
    isLoading: false,
  });

  const handleChange = useCallback((e) => {
    setState((prevState) => ({ ...prevState, data: e }));
  }, []);

  const handleUpload = (e) => {
    setState((prevState) => ({
      ...prevState,
      toggle: false,
      error: false,
      isLoading: true
    }));

    fetch(EMPLOYEES_URL, {
      method: "DELETE",
      body: null,
    });

    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        const dataArray = result.data.map((element) => JSON.stringify(element));

        if (dataArray.length === 0) {
          setState((prevState) => ({ ...prevState, error: true }));
          return;
        }

        const fetchPromises = dataArray.map((dataItem) =>
          fetch(EMPLOYEES_URL, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: dataItem,
          })
        );

        Promise.allSettled(fetchPromises).then((results) => {
          setState((prevState) =>({
            ...prevState,
            error: results.some((result) => result.status === "rejected" || result.value.ok === false)
          }))
            setState((prevState) => ({ ...prevState, toggle: true }));
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
        Upload & Fetch
      </button>
      {state.error && (
        <h2 className="error">
          The file contains illegal values or is empty
        </h2>
      )}
      {state.toggle && <EmployeeTable/>}
    </>
  );
};

export default Menu;
