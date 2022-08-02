import React, { useState } from "react";
import "./index.css";
import logo1 from "./../../images/login1.png";
import logo2 from "./../../images/login2.png";
import axios from "axios";
import { toast } from "wc-toast";
import { URL } from "../helper";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const router = useNavigate();
  const [logicLogin, setLogicLogin] = useState({
    started: true,
    login: false,
    register: false,
  });
  const [register, setRegister] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const sendRegister = async (body) => {
    try {
      if (!register.userName || !register.email || !register.password) {
        return toast.error("Please enter full field");
      }
      if (register.password !== register.passwordConfirm) {
        return toast.error("Password does not match");
      }
      const res = await axios.post(`${URL}register`, body);
      if (res) {
        setLogicLogin({
          started: false,
          login: true,
          register: false,
        });
        return toast.success("Register success");
      }
    } catch (error) {
      return toast.error("Register failed");
    }
  };
  const sendLogin = async (body) => {
    try {
      if (!login.email || !login.password) {
        return toast.error("Please enter full field");
      }
      const res = await axios.post(`${URL}login`, body);
      if (res?.data?.token) {
        localStorage.setItem("token", res?.data?.token);
        router("/");
        return toast.success("Login success");
      }
    } catch (error) {
      return toast.error("Login failed1");
    }
  };
  return (
    <div className="login-component">
      <div
        className="login-component-content"
        style={{ display: logicLogin?.started ? "flex" : "none" }}
      >
        <div className="">
          <img src={logo1} alt="" />
        </div>
        <div className="">
          <h3>Welcome to Louis Music !!!</h3>
          <p className="text-center">
            Find new and trending music & audio. Follow your favorite artists
            and friends. Create and share playlists. Explore every genre you can
            think of. Our app makes it easy for you to hear what you want to
            hear.
          </p>
        </div>
        <div className="">
          <button
            onClick={() => {
              setLogicLogin({
                started: false,
                login: true,
                register: false,
              });
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <div
        className="login-component-content login-register"
        style={{ display: logicLogin?.register ? "flex" : "none" }}
      >
        <div className="">
          <h3>Welcome to Louis Music !!!</h3>
          <span>Let’s help you register.</span>
        </div>
        <div className="">
          <input
            placeholder="Enter your full name"
            onChange={(e) =>
              setRegister({ ...register, userName: e.target.value })
            }
          />
          <input
            placeholder="Enter your email"
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
          <input
            placeholder="Enter password"
            type="password"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <input
            placeholder="Confirm password"
            type="password"
            onChange={(e) =>
              setRegister({ ...register, passwordConfirm: e.target.value })
            }
          />
        </div>
        <div className="">
          <button onClick={() => sendRegister(register)}>Sign up</button>
          <span className="btn-logn">
            Already have an account ?{" "}
            <strong
              className="sign-up"
              onClick={() => {
                setLogicLogin({
                  started: false,
                  login: true,
                  register: false,
                });
              }}
            >
              Sign in
            </strong>{" "}
          </span>
        </div>
      </div>
      <div
        className="login-component-content"
        style={{ display: logicLogin?.login ? "flex" : "none" }}
      >
        <div className="">
          <h3>Welcome Back!</h3>
          <img src={logo2} alt="" />
        </div>
        <div className="">
          <input
            placeholder="Enter your email"
            onChange={(e) => setLogin({ ...login, email: e?.target?.value })}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setLogin({ ...login, password: e?.target?.value })}
          />
        </div>
        <div className="">
          <button onClick={() => sendLogin(login)}>Sign In</button>
          <span className="btn-logn">
            Don’t have any account ?{" "}
            <strong
              className="sign-up"
              onClick={() => {
                setLogicLogin({
                  started: false,
                  login: false,
                  register: true,
                });
              }}
            >
              Sign up
            </strong>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
