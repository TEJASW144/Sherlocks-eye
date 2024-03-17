import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
function CommentPage(props) {
  const commentId = props.match.params.id;
  const [comment, setComment] = useState({});
  useEffect(() => {
    axios.get("http://localhost:4000/comments/" + commentId);
  });

  return <div>{comment && <Post {...comment} />} </div>;
}
export default CommentPage;
