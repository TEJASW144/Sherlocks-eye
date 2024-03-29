import CommentPage from "./CommentPage";
import Board from "./Board";
import CommentModal from "./CommentModal";
import { useEffect } from "react";
import { useState } from "react";
import {
  Switch,
  useLocation,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
// import CommentModal from "./CommentModal";
function RoutingSwitch() {
  let location = useLocation();
  let commentId = null;
  const [postOpen, setPostOpen] = useState(false);
  // const [commentId, setCommentId] = useState(null);
  console.log(location);
  if (location.state && location.state.commentId) {
    location.pathname = "/";
    commentId = location.state.commentId;
  }
  useEffect(() => {
    setPostOpen(true);
  }, [commentId]);

  useEffect(() => {
    commentId = null;
  }, [postOpen]);
  return (
    <>
      {commentId && (
        <div>
          <CommentModal
            id={commentId}
            open={postOpen}
            onOutsideClick={() => setPostOpen(false)}
          />
        </div>
      )}
      <Switch location={location}>
        <Route exact path="/" component={Board} />
        <Route path="/comments/:id" component={CommentPage} />
      </Switch>
    </>
  );
}
export default RoutingSwitch;
