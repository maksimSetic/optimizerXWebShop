import React, { useState } from "react";
import axios from "axios";
import SearchEnginePage from "../Pages/SearchEnginePage";
import Popup from "./Popup";

const Login = ({
  success,
  setSuccess,
  userName,
  setUsername,
  password,
  setPassword,
  errMsg,
  setErrMsg,
  handleRegisterOpen,
}) => {
  const [userId, setUserId] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        userName,
        password,
      });
      console.log(response.data);
      setLoginSuccess(true);
      setUserId(response.data.user.id);
    } catch (error) {
      console.error(error);
      if (error.response.status === 401) {
        setErrMsg("Invalid username or password");
        setPopupMessage("Invalid username or password");
        setIsPopupOpen(true);
      } else {
        setErrMsg("Login failed");
      }
    }
  };

  return (
    <div>
      {isPopupOpen && (
        <Popup
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
          popupMessage={popupMessage}
        />
      )}
      {loginSuccess && (
        <SearchEnginePage
          userName={userName}
          setUsername={setUsername}
          userId={userId}
        />
      )}
      {!loginSuccess && (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label
            style={{ position: "unset", textAlign: "left", transform: "unset" }}
          >
            Username:
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label
            style={{ position: "unset", textAlign: "left", transform: "unset" }}
          >
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
          <button onClick={handleRegisterOpen}>Sign up</button>
          {errMsg && <div>{errMsg}</div>}
        </form>
      )}
    </div>
  );
};

export default Login;
