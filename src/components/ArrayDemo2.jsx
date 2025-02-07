import React from "react";

export const ArrayDemo2 = () => {

    var students = [
        {
            name:"Kunal",
            age:22,
            marks:78
        },
        {
            name:"Ajay",
            age:23,
            marks:80
        },
        {
            name:"Raj",
            age:21,
            marks:66
        }
    ]


  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Array Demo 2</h1>
      {
        students.map((stu)=>{
            //return <li>{stu.name} -- {stu.age} -- {stu.marks}</li>
            return <div>
                <h1>Name = {stu.name}</h1>
                <h2>Age = {stu.age}</h2>
                <h3>Marks = {stu.marks}</h3>
            </div>
        })
      }
    </div>
  );
};
