import { Link } from "react-router-dom";
function Post(props) {
  return (
    <div className="px-6 text-gray-400 mb-4">
      <Link
        to={"/comments/" + props._id}
        className=" block border rounded-md border-gray-950 hover:border-gray-600 bg-gray-900 p-2 cursor-pointer"
      >
        <h5 className="text-gray-600 mb-1">
          Posted by /{props.author} 6 hours ago: {props.postedAt}
        </h5>
        <h2 className="text-3xl mb-3 ">{props.title}</h2>
        <div className="text-sm leading-6">{props.body}</div>
      </Link>
    </div>
  );
}

export default Post;
