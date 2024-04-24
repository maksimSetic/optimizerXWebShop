import React, { useState } from "react";
import Login from "../Utils/Login";
import Register from "../Utils/Register";
import SearchEnginePage from "./SearchEnginePage";

const Home = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(true);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [userName, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleRegisterOpen = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const handleAuthSuccess = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setAuthSuccess(true);
  };

  return (
    <>
      {/*  {!loginSuccess && !isRegisterOpen && (
        <Login
          success={loginSuccess}
          setSuccess={setLoginSuccess}
          authSuccess={authSuccess}
          setAuthSuccess={setAuthSuccess}
          handleRegisterOpen={handleRegisterOpen}
          handleAuthSuccess={handleAuthSuccess}
          userName={userName}
          setUsername={setUsername}
          pwd={pwd}
          setPwd={setPwd}
          errMsg={errMsg}
          setErrMsg={setErrMsg}
        />
      )}
      {!loginSuccess && !isLoginOpen && (
        <Register
          success={registerSuccess}
          setSuccess={setRegisterSuccess}
          handleLoginOpen={handleLoginOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          setIsLoginOpen={setIsLoginOpen}
        />
      )} */}

      <SearchEnginePage userName={userName} setUsername={setUsername} />
    </>
  );
};

export default Home;
