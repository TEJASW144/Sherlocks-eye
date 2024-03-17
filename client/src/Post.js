import { Link } from "react-router-dom";

function Post(props) {
  function PostContent() {
    return (
      <div>
        <h5 className="text-gray-600 mb-1">
          Posted by /{props.author} 6 hours ago: {props.postedAt}
        </h5>
        <h2 className="text-3xl mb-3 ">{props.title}</h2>
        <div className="text-sm leading-6">{props.body}</div>
      </div>
    );
  }
  const postClasses =
    " block border rounded-md border-gray-950 hover:border-gray-600 bg-gray-900 p-2 cursor-pointer";
  return (
    <div className="px-6 text-gray-400 mb-4">
      {props.open && (
        <div className={postClasses}>
          <PostContent />
        </div>
      )}
      {!props.open && (
        <a
          href={"/comments/" + props._id}
          onClick={() => {
            // For example, we can use localStorage or sessionStorage to store the state
            localStorage.setItem("commentId", props._id);
            // Then navigate to the new URL
            window.location.href = "/comments/" + props._id;
          }}
          className={postClasses}
        >
          <PostContent />
        </a>
      )}
    </div>
  );
}

export default Post;
