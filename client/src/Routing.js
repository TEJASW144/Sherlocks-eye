import {
  Switch,
  useLocation,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import RoutingSwitch from "./RoutingSwitch";
import Headermint from "./Headermint";
import AuthModal from "./AuthModal";
import PostFormModal from "./PostFormModal";

function Routing() {
  return (
    <>
      <Router>
        <Headermint />
        <RoutingSwitch />
        <AuthModal />
        <PostFormModal />
      </Router>
    </>
  );
}

export default Routing;
