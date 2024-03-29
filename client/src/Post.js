import { NavLink, Link } from "react-router-dom";
import reloadDocument from "react-router-dom";
import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import PostContent from "./PostContent";
function Post(props) {
  const [state, setState] = useState(false);

  function handleLinkClick(event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Navigate to the desired URL programmatically
    let commentId = props.rootId || props._id;
    let url = "/comments/" + commentId + "?commentId=" + commentId;
    setState({ commentId: props.rootId || props._id });
    // Navigate to the constructed URL
    window.location.href = url;
  }

  const postClasses =
    " block border rounded-md border-gray-950 hover:border-gray-600 bg-gray-900 p-2 cursor-pointer";
  return (
    <div className="px-6 text-gray-400 mb-4">
      {props.open && (
        <div className={postClasses}>
          <PostContent {...props} />
        </div>
      )}
      {!props.open && (
        // <a
        //   href={"/comments/" + props._id}
        //   onClick={() => {
        //     // For example, we can use localStorage or sessionStorage to store the state
        //     localStorage.setItem("commentId", props._id);
        //     // Then navigate to the new URL
        //     window.location.href = "/comments/" + props._id;
        //   }}
        //   className={postClasses}
        // >
        <Link
          to={{
            pathname: "/comments/" + (props.rootId || props._id),
            state: { commentId: props.rootId || props._id },
          }}
          className={postClasses}
        >
          <PostContent {...props} />
        </Link>
        // <a
        //   href={"/comments/" + (props.rootId || props._id)}
        //   onClick={handleLinkClick}
        //   className={postClasses}
        // >
        //   {/* Content inside the anchor tag */}
        //   <PostContent />
        // </a>
        // </a>
      )}
    </div>
  );
}

export default Post;
