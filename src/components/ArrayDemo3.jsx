import React from "react";

export const ArrayDemo3 = () => {
  var employees = [
    {
      id: 1011,
      name: "Parth",
      age: 25,
      salary: 16000,
      gender: "male",
    },
    {
      id: 1012,
      name: "seeta",
      age: 24,
      salary: 15000,
      gender: "female",
    },
    {
      id: 1013,
      name: "Kunal",
      age: 25,
      salary: 18000,
      gender: "male",
    },
    {
      id: 1014,
      name: "Janki",
      age: 26,
      salary: 17000,
      gender: "female",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Array Demo 3</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.salary}</td>
                <td>{emp.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
