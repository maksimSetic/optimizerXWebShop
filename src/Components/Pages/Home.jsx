import React, { useState } from "react";
import Login from "../Utils/Login";
import Register from "../Utils/Register";

const Home = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(true);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [userName, setUsername] = useState("Matija");
  const [pwd, setPwd] = useState("lala123!");
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
      {!isRegisterOpen && (
        <Login
          authSuccess={authSuccess}
          setAuthSuccess={setAuthSuccess}
          handleRegisterOpen={handleRegisterOpen}
          handleAuthSuccess={handleAuthSuccess}
          userName={userName}
          setUsername={setUsername}
          password={pwd}
          setPassword={setPwd}
          errMsg={errMsg}
          setErrMsg={setErrMsg}
        />
      )}
      {!isLoginOpen && (
        <Register
          success={registerSuccess}
          setSuccess={setRegisterSuccess}
          handleLoginOpen={handleLoginOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          setIsLoginOpen={setIsLoginOpen}
        />
      )}
    </>
  );
};

export default Home;
