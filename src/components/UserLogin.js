import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const UserLogin = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, password });
  };
  return (
    <div>
      <h2>User Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={Username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      &nbsp;&nbsp;
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserLogin;
