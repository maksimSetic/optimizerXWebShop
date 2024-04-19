import React, { useState } from "react";
import Login from "../Utils/Login";
import Register from "../Utils/Register";
import SearchEnginePage from "./SearchEnginePage";

const Home = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(true);

  const handleRegisterOpen = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  return (
    <>
      {isLoginOpen && !isRegisterOpen && !loginSuccess && (
        <Login
          success={loginSuccess}
          setSuccess={setLoginSuccess}
          handleRegisterOpen={handleRegisterOpen}
        />
      )}

      {!isLoginOpen && isRegisterOpen && !registerSuccess && (
        <Register
          success={registerSuccess}
          setSuccess={setRegisterSuccess}
          handleLoginOpen={handleLoginOpen}
        />
      )}

      {loginSuccess && <SearchEnginePage />}
    </>
  );
};

export default Home;
