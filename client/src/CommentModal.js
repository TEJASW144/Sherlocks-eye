import PostContent from "./PostContent";
import { useEffect, useState } from "react";
import axios from "axios";
import OutsideClickHandler from "react-outside-click-handler";
function CommentModal(props) {
  const [comment, setComment] = useState({});
  const visibleClass = props.open ? "block" : "hidden";
  useEffect(() => {
    axios.get("http://localhost:4000/comments/" + props.id).then((response) => {
      setComment(response.data);
    });
  }, [props.id]);
  function close() {
    setComment({});

    props.onOutsideClick();
  }
  return (
    <div
      className={
        "w-screen h-screen fixed  top-0 left-0  overflow-scroll z-30 flex mr-10 " +
        visibleClass
      }
      style={{ backgroundColor: "rgba(0,0,0,.6)" }}
    >
      <OutsideClickHandler onOutsideClick={() => close()}>
        <div className="   bg-black p-5 text-reddit_text self-center mx-10  my-28  rounded-md  fixed w-auto mr-10">
          <div
            className="max-h-screen block overflow-scroll"
            style={{
              maxHeight: "calc(100vh-200px)",
              scrollbarColor: "black black",
              scrollbarWidth: "thin",
            }}
          >
            <PostContent open={true} {...comment} />
          </div>
          {/* ID:{props.id}; */}
        </div>
      </OutsideClickHandler>
    </div>
  );
}
export default CommentModal;
