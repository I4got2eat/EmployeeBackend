import React, { useState } from "react";
import { useEffect } from "react";

export const EmployeeTable = () => {
  var key=0;
  const [data, setData] = useState([]);
  var request = new Request("http://localhost:8080/database/get", {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
  });

  useEffect(() => {
    fetch(request)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.message);
        setData(resJson);
      });

  }, []);

  return (
    <>
      <div className="content">
        <div className="main">
          <div className="titles">
            <h2 className="name">Name</h2>
            <h2 className="email"> Email</h2>
            <h2 className="number">Number</h2>
          </div>
          {data.map(({name, email, number }) => (
            <div className="infoField" key={key++}>
              <h3>{name}</h3>
              <h3 className="email">{email}</h3>
              <h3 className="number" >{number}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
