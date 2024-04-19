import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./ContextProvider";
import { Link } from "react-router-dom";
import axios from "../API/axios";

const REGISTER_URL = "https://api.npoint.io/75d66fd964e4cb9cf11a";

const Login = ({ success, setSuccess, handleRegisterOpen }) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userName, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(REGISTER_URL);
      const users = response.data;

      const user = users.find((u) => u.userName === userName && u.pwd === pwd);
      if (user) {
        setSuccess(true);
        setAuth(user);
      } else {
        setErrMsg("Invalid username or password");
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleNonSuccess = () => {
    return (
      <div
        class="col-sm-12"
        style={{ position: "absolute", zIndex: "2", left: "50%" }}
      >
        <div role="alert" data-brk-library="component__alert">
          <div class="rotating-text-wrapper">
            <h2>{errMsg}</h2>
          </div>
          <p></p>
        </div>
      </div>
    );
  };

  const handleSuccess = () => {
    return (
      <div
        class="col-sm-12"
        style={{ position: "absolute", zIndex: "2", left: "50%" }}
      >
        <div role="alert" data-brk-library="component__alert">
          <div class="rotating-text-wrapper">
            <h2>{errMsg}</h2>
          </div>
          <p></p>
        </div>
      </div>
    );
  };

  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          <div class="col-sm-12">
            <div role="alert" data-brk-library="component__alert">
              <div class="rotating-text-wrapper">
                <h2>{errMsg}</h2>
              </div>
              <p></p>
            </div>
          </div>
        </p>
        <h1
          style={{
            fontFamily: "Sacramento",
            fontSize: "44px",
            fontWeight: 600,
          }}
        >
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <i>Username:</i>
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={userName}
            required
          />
          <label htmlFor="password">
            <i>Password:</i>
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button
            onClick={success ? handleNonSuccess : handleNonSuccess}
            style={{ fontSize: "16px" }}
          >
            Log In
          </button>
        </form>
        <p>
          Need an Account?
          <br />
          <span className="line">
            <button onClick={handleRegisterOpen}>Sign Up</button>
          </span>
        </p>
      </section>
    </>
  );
};

export default Login;
