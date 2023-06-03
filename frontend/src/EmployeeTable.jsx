import React, { useState, useEffect } from "react";
import { EMPLOYEES_URL } from "./URLS";

export const EmployeeTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(EMPLOYEES_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => setData(resJson))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
      <div className="content">
        <div className="main">
          <div className="titles">
            <h2 className="name">Name</h2>
            <h2 className="email"> Email</h2>
            <h2 className="number">Number</h2>
          </div>
          {data.map(({name, email, number }, index) => (
            <div className="infoField" key={index}>
              <h3>{name}</h3>
              <h3 className="email">{email}</h3>
              <h3 className="number">{number}</h3>
            </div>
          ))}
        </div>
      </div>
  );
};
