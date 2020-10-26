import React from "react";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.svg";
import google from "../images/google.png";
import github from "../images/github.png";
import "../css/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__leftHalf">
        <div className="leftHalf__container">
          <img src={logo} alt="firebase logo" />
          <h2>Firebase Chat</h2>
          <h5>
            Hello, Welcome to the real Time Chat app supported by{" "}
            <span>firebase</span>
          </h5>
        </div>
      </div>
      <div className="login__rightHalf">
        <div className="rightHalf__container">
          <img src={avatar} alt="avatar logo" />
          <h3>Welcome</h3>
          <button className="button__google">
            <img className="icon" src={google} alt="google" />
            Login With Google
          </button>
          <button className="button__github">
            <img className="icon" src={github} alt="github" />
            Login With Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
