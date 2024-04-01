import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";
function PostsListing() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/comments", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      })

      .catch((error) => {
        // Handle error here
        console.error("Error fetching user data:", error);
      });
  }, []);
  return (
    <div className="bg-gray-950">
      {comments.map((comment) => (
        <Post {...comment} isListing={true} />
      ))}
    </div>
  );
}
export default PostsListing;
