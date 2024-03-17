import {
  Switch,
  useLocation,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import RoutingSwitch from "./RoutingSwitch";
import Headermint from "./Headermint";
function Routing() {
  return (
    <>
      <Router>
        <Headermint />
        <RoutingSwitch />
      </Router>
    </>
  );
}

export default Routing;
