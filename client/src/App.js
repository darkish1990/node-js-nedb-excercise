import React, { useState } from "react";
import "./App.css";
import {
  handleFetchClickLogin,
  handleFetchClickGet,
  handleFetchClickDelete
} from "./utils/utils";

function App() {
  const [user, setuser] = useState();
  const [pass, setpass] = useState();
  let data = { user, pass };

  return (
    <div className="App">
      <input
        type="text"
        className="user"
        placeholder="user"
        onChange={e => setuser(e.target.value)}
      />
      <input
        type="text"
        className="pass"
        placeholder="pass"
        onChange={e => setpass(e.target.value)}
      />
      <button onClick={e => handleFetchClickLogin(e, data)}>register user</button>
      <button onClick={e => handleFetchClickGet(e, data)}>get users</button>
      <button onClick={e => handleFetchClickDelete(e, data)}>
        delete User
      </button>


      <p>u can create a user by inserting data and pushing the register user </p>
      <p>u can get all users by pushing the get users button </p>
      <p>u can delete a user by inserting user and pushing the delete user </p>
      <p>all in the console</p>
    </div>
  );
}

export default App;
