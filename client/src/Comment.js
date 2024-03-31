import Post from "./Post";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import RootCommentContext from "./RootCommentContext";
import axios from "axios";
import { useState, useEffect } from "react";
function Comment(props) {
  const [comment, setComment] = useState({});
  const [comments, setComments] = useState([]);
  // const rootCommentInfo=useContext(RootCommentContext);

  function refreshComments() {
    axios
      .get("http://localhost:4000/comments/root/" + props.id)
      .then((response) => {
        setComments(response.data);
      });
  }
  useEffect(() => {
    axios.get("http://localhost:4000/comments/" + props.id).then((response) => {
      setComment(response.data);
    });
    refreshComments();
  }, [props.id]);

  return (
    <>
      {comment && <Post {...comment} open={true} />}
      {!!comment && !!comment._id && (
        <>
          <hr className="border-reddit_border my-4" />
          <CommentForm
            rootId={comment._id}
            parentId={comment._id}
            showAuthor={true}
            onSubmit={() => refreshComments()}
          />
          <hr className="border-reddit_border my-4" />
          <RootCommentContext.Provider value={{ refreshComments }}>
            <Comments
              parentId={comment._id}
              rootId={comment._id}
              comments={comments}
            />
          </RootCommentContext.Provider>
        </>
      )}
    </>
  );
}
export default Comment;
