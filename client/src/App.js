import "./App.css";
import Headermint from "./Headermint";
import BoardHeader from "./BoardHeader";
import PostForm from "./PostForm";
import AuthModal from "./AuthModal";
import { useState, useEffect } from "react";
import axios from "axios";
import AuthModalContext from "./AuthModalContext";
import UserContext from "./UserContext";
import Post from "./Post";
import PostListing from "./PostsListing";
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom"
import Board from "./Board";
function App() {
  const [showAuthModal, setShowAuthModal] = useState(true);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/user", { withCredentials: true })
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
            <Routes>
              <Route path="/" component={Board} />
            </Routes>
          </Router>
          <AuthModal />
          
        </UserContext.Provider>
      </AuthModalContext.Provider>
    </>
  );
}

export default App;
