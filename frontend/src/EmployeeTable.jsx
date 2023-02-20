import React, { useState } from "react";
import { useEffect } from "react";

export const EmployeeTable = () => {
  const [data, setData] = useState([]);
  let key = 0;
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

    for (var item in data) {
      console.log(item + it);
    }
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
          {data.map((person) => (
            <div className="infoField" key={key++}>
              <h3>{person.name}</h3>
              <h3 className="email">{person.email}</h3>
              <h3 className="number" >{person.number}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
