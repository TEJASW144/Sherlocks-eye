import "./App.css";
import Headermint from "./Headermint";
import BoardHeader from "./BoardHeader";
import Board from "./Board";
import PostForm from "./PostForm";
import AuthModal from "./AuthModal";
import { useState, useEffect } from "react";
import axios from "axios";
import AuthModalContext from "./AuthModalContext";
import UserContext from "./UserContext";
import PostsListing from "./PostsListing";
import Post from "./Post";
import PostListing from "./PostsListing";
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Board from "./Board";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import CommentPage from "./CommentPage";
function App() {
  const [showAuthModal, setShowAuthModal] = useState(true);
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
        <UserContext.Provider value={{ ...user, logout, setUser }}>
          <Headermint />

          <Router>
            <Switch>
              <Route path="/" component={Board} />
              {/* <Route exact path="/comments/:id" component={CommentPage} /> */}
            </Switch>
          </Router>
          <AuthModal />
        </UserContext.Provider>
      </AuthModalContext.Provider>
    </>
  );
}

export default App;
