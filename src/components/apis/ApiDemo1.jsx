import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);

  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res); //axios object...
    console.log(res.data); //original response....
    console.log(res.data.message);
    setmessage(res.data.message); //""
    console.log(res.data.data);
    setusers(res.data.data); //[]
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 1</h1>
      <button
        onClick={() => {
          getUserData();
        }}
      >
        get
      </button>
      {message}
      {/* {users} */}
      {users?.map((user) => {
        return (
          <li>
            {user.name} {user.age}
          </li>
        );
      })}
    </div>
  );
};
