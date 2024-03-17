import "./App.css";
import AuthModal from "./AuthModal";
import { useState, useEffect } from "react";
import axios from "axios";
import AuthModalContext from "./AuthModalContext";
import UserContext from "./UserContext";
import Routing from "./Routing";
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
          <Routing />
          <AuthModal />
        </UserContext.Provider>
      </AuthModalContext.Provider>
    </>
  );
}

export default App;
