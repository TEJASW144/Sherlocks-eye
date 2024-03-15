import Button from "./Button";
import Input from "./Input";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthModalContext from "./AuthModalContext";
import UserContext from "./UserContext";
import OutsideClickHandler from "react-outside-click-handler";

function AuthModal() {
  const [modalType, setModalType] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const modalContext = useContext(AuthModalContext);
  const user = useContext(UserContext);
  const visibleClass = modalContext.show !== false ? "block" : "hidden";

  if (modalContext.show && modalContext.show !== modalType) {
    // setModalType(modalContext.show);
    // console.log(modalContext.show);
  }
  function register(e) {
    e.preventDefault();
    const data = { email, username, password };
    axios
      .post("http://localhost:4000/register", data, {
        withCredentials: true,
      })

      .then(() => {
        console.log();
        user.setUser({ username });
        modalContext.setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
      });
  }
  function login() {
    const data = { username, password };
    axios
      .post("http://localhost:4000/login", data, { withCredentials: true })
      .then(() => {
        modalContext.setShow(false);
        user.setUser({ username });
        setPassword("");
        setUsername("");
      });
  }

  return (
    <div
      className={
        "w-screen h-screen fixed  top-0 left-0 z-30 flex " + visibleClass
      }
      style={{ backgroundColor: "rgba(0,0,0,.6)" }}
    >
      <OutsideClickHandler onOutsideClick={() => modalContext.setShow(false)}>
        <div className="border border-gray-200  w-3/4 sm:w-1/2 lg:w-1/4 bg-black p-5 text-reddit_text self-center mx-96 my-28 rounded-md  fixed">
          {/* <h1 className='text-white text-2xl mb-3'>Login</h1> */}
          {modalType === "login" && (
            <h1 className="text-white text-2xl mb-5">Login</h1>
          )}
          {modalType === "register" && (
            <h1 className="text-white text-2xl mb-5">Sign Up</h1>
          )}
          {modalType === "register" && (
            <label>
              <span className="text-gray-400 text-sm">E-mail:</span>
              <Input
                type="email"
                className="mb-3 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          )}
          <label>
            <span className="text-gray-700 text-sm">Username:</span>
            <Input
              type="text"
              className="mb-3 w-full "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <span className="text-gray-700 text-sm">Password:</span>
            <Input
              type="password"
              className="mb-3 w-full "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {modalType === "login" && (
            <Button
              className="w-full py-2 mb-3"
              style={{ borderRadius: ".3rem" }}
              onClick={() => login()}
            >
              Log In
            </Button>
          )}
          {modalType === "register" && (
            <Button
              className="w-full py-2 mb-3"
              style={{ borderRadius: ".3rem" }}
              onClick={(e) => register(e)}
            >
              Sign Up
            </Button>
          )}
          {modalType === "login" && (
            <div className="text-white">
              New to Reddit?{" "}
              <button
                className="text-blue-600"
                onClick={() => setModalType("register")}
              >
                SIGN UP
              </button>
            </div>
          )}
          {modalType === "register" && (
            <div className="text-white">
              Already have an account?{" "}
              <button
                className="text-blue-600"
                onClick={() => setModalType("login")}
              >
                LOG IN
              </button>
            </div>
          )}
        </div>{" "}
      </OutsideClickHandler>
    </div>
  );
}

export default AuthModal;
