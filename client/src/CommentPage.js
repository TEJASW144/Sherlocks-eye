import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Comment from "./Comment";
function CommentPage(props) {
  const commentId = props.match.params.id;

  return (
    <div className=" bg-black py-4 px-6">
      <div className="bg-gray-900 p-3 rounded-md">
        <Comment id={commentId} />
      </div>
    </div>
  );
}
export default CommentPage;
