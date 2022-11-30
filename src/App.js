import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };

  return (
    <>
      <h1>React App</h1>
      <button onClick={loadUsers}>Fetch Users</button>
      
      <h2>Users:</h2>
      <div className="container">
        {users.map((curElem) => {
          return (
            <div className="card">
              <div className="image">
                <img src={curElem.avatar_url} alt="" />
              </div>
              <div className="text">
               
                <h3>Name: {curElem.login} </h3>
                <a href={curElem.html_url}>
                <img className="icon" src={"./icon.svg"} alt="" />

                  Follow Me
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
