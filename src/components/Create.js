import React, { useState } from "react";
import "./Create.css";

const Create = () => {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");

  const addHandler = (e) => {
    e.preventDefault();
    const userData = {
      id: user.length + 1,
      userName,
      email,
      dob,
      number,
    };
    setUser([...user, userData]);
    setUserName("");
    setEmail("");
    setDob("");
    setNumber("");
  };
  const updateHandler = (e) => {
    e.preventDefault();
    const userDetails = { id: editUser, userName, email, dob, number };
    const updatedData = user.map((each) =>
      each.id === editUser ? userDetails : each
    );
    setUser(updatedData);
    setUserName("");
    setEmail("");
    setDob("");
    setNumber("");
    setShow(false);
    setEditUser(null);
  };
  const editForm = (eachUser) => {
    setUserName(eachUser.userName);
    setEmail(eachUser.email);
    setDob(eachUser.email);
    setNumber(eachUser.number);
    setShow(true);
    setEditUser(eachUser.id);
  };

  const deleteHandler = (index) => {
    const deleteData = [...user];
    deleteData.splice(index, 1);
    setUser(deleteData);
  };
  return (
    <>
      <form>
        <table>
          <tbody>
            <tr>
              <th>UserName</th>
              <td>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>DOB</th>
              <td>
                <input
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Number</th>
              <td>
                <input
                  type="number"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {show ? (
          <button onClick={updateHandler}>Update</button>
        ) : (
          <button onClick={addHandler}>Add</button>
        )}
      </form>
      <hr />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>UserName</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Number</th>
            <th>Functions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((eachUser, index) => {
            return (
              <tr key={index}>
                <td>{eachUser.id}</td>
                <td>{eachUser.userName}</td>
                <td>{eachUser.email}</td>
                <td>{eachUser.dob}</td>
                <td>{eachUser.number}</td>
                <td>
                  <button
                    onClick={() => {
                      editForm(eachUser);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      deleteHandler(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Create;
