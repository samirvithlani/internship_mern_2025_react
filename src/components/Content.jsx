import React from "react";

export const Content = () => {
  var name = "Amit";
  var age = 22;
  var isActive = false;
  var user = {
    firstName: "jay",
    lastName: "abc",
    age: 24,
  };

  return (
    <div>
      <h1>CONTENT</h1>
      {name}
      <h1>Name = {name}</h1>
      <h2>Age = {age}</h2>
      <h2>isActive = {isActive}</h2>
      <h2>active = {isActive == true ? "Active" : "Not Active"}</h2>
      <h2>user firstName= {user.firstName}</h2>
      <h2>lastname {user.lastName}</h2>
      <h3>age = {user.age}</h3>
    </div>
  );
};
