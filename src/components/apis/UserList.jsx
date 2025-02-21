import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomLoader } from "../CustomLoader";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const UserList = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const getUserList = async () => {
    //start
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    setusers(res.data.data);
    //end
    setisLoading(false);
  };

  useEffect(() => {
    getUserList();
  }, []);

  const deleteUser = async (id) => {
    //alert(id)
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    console.log(res);
    if (res.status == 204) {
      //alert("user deleted..");
      toast.error('record deleted !!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      getUserList(); //get -->
    }
    //const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      {/* {
            isLoading == true && <h1>Loading....</h1>
        } */}
      {isLoading == true && <CustomLoader />}
      <h1>USER LIST</h1>
      {/* <button onClick={()=>{getUserList()}}>GET</button> */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {/* <span style={{color:user.age>=23?"red":""}}>{user.age}</span></td> */}
                  <span style={{ color: user.age >= 23 && "red" }}>
                    {user.age}
                  </span>
                </td>
                <td>{user.isActive == true ? "Active" : "Not Active"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
