import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";
function PostListing(props){
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        axios
      .get("http://localhost:4000/comments", { withCredentials: true })
      .then((response) => setComments(response.data))

      .catch((error) => {
        // Handle error here
        console.error("Error fetching user data:", error);
        
      });
    }, []);
     
    return(
        <div className="bg-gray-950">
            {props.comments.map(comment=>(
              <Post {...comment}/>
            ))}
          </div>
    );
}

export default PostListing;