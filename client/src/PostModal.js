import PostContent from "./PostContent";
import axios from "axios";
import { useState, useEffect } from "react";
function PostModal(props) {

    

  const visibleClass = "block";
  return (
    <div className={"w-screen h-screen fixed  top-0 left-0 z-30 flex " + visibleClass} style={{ backgroundColor: "rgba(0,0,0,.6)" }}>
        <div className=" w-3/4 md:w-1/2 lg:w-1/4 bg-black  text-reddit_text self-center p-4 mx-96 my-28 rounded-md  fixed">
            <PostContent open={true} />
        </div>
    </div>

  );
}

export default PostModal;
