import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";
import AuthModalContext from "./AuthModalContext";
import PostFormModalContext from "./PostFormModalContext";
import UserContext from "./UserContext";
import Routing from "./Routing";
import PostForm from "./PostForm";

// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPostFormModal, setShowPostFormModal] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/user", {
        withCredentials: true,
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      })
      .then((response) => setUser(response.data))

      .catch((error) => {
        // Handle error here
        console.error("Error fetching user data:", error);
      });
  }, []);

  function logout() {
    axios
      .post("http://localhost:4000/logout", {}, { withCredentials: true })
      .then(() => setUser({}));
  }
  return (
    <>
      <AuthModalContext.Provider
        value={{ show: showAuthModal, setShow: setShowAuthModal }}
      >
        <PostFormModalContext.Provider
          value={{ show: showPostFormModal, setShow: setShowPostFormModal }}
        >
          <UserContext.Provider value={{ ...user, logout, setUser }}>
            <Routing />
          </UserContext.Provider>
        </PostFormModalContext.Provider>
      </AuthModalContext.Provider>
    </>
  );
}

export default App;
