import CommentPage from "./CommentPage";
import Board from "./Board";
import {
  Switch,
  useLocation,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
function RoutingSwitch() {
  //   let location = useLocation();
  //   const commentId = null;
  //   console.log(location);
  //   if (location.state && location.state.commentId) {
  //     location.pathname = "/";
  //     commentPopupId = location.state.commentId;
  //   }
  return (
    <>
      <Switch>
        {/* {commentId && <div>We have commentId: {commentId}</div>} */}
        <Route exact path="/" component={Board} />
        <Route path="/comments/:id" component={CommentPage} />
      </Switch>
    </>
  );
}
export default RoutingSwitch;
