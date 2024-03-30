import React from "react";

function Comments(props) {
  const comments = props.comments.filter(comment => props.parentId === comment.parentId);
  return(
    <div>
      {comments.map(comment => (
        <div>
          <div className="bg-white w-8 h-8 rounded-full"/>
          {comment.author}
        </div>
      ))}
      
    </div>
  );
}

export default Comments;
