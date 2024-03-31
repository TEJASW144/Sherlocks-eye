import React from "react";
import ReactTimeAgo from "react-time-ago";
import Button from "./Button";
import CommentForm from "./CommentForm";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import RootCommentContext from "./RootCommentContext";
import { useState, useContext } from "react";
function Comments(props) {
  const [showForm, setShowForm] = useState(false);
  const comments = props.comments.filter(
    (comment) => props.parentId === comment.parentId
  );
  const rootCommentInfo = useContext(RootCommentContext);
  return (
    <div className={"my-2 text-reddit_text"}>
      {comments.map((comment) => {
        const replies = props.comments.filter(
          (c) => c.parentId === comment._id
        );
        return (
          <div className="text-white">
            <div className="flex mb-2">
              <div className="bg-white w-12 h-12 rounded-full mr-2" />
              <div className="py-1 px-2 text-lg pt-2">{comment.author}</div>
              <div className="text-md px-2 py-1 pt-3">
                <ReactTimeAgo date={comment.postedAt} locale="en-IN" />
              </div>
            </div>
            <div className="border-l-2 border-reddit_text-darker p-3 ml-4 pb-0 pl-6">
              {/* {comment.body} */}
              <div>
                <ReactMarkdown remarkPlugins={[gfm]} children={comment.body} />
              </div>
              <div>
                <Button
                  type={"button"}
                  onClick={() => setShowForm(comment._id)}
                  className="bg-reddit_dark text-white border-none pr-0 pl-0 pd-3"
                >
                  Reply
                </Button>
                {comment._id === showForm && (
                  <CommentForm
                    showAuthor={false}
                    parentId={comment._id}
                    rootId={props.rootId}
                    onSubmit={() => {
                      setShowForm(false);
                      rootCommentInfo.refreshComments();
                    }}
                    onCancel={(e) => setShowForm(false)}
                  />
                )}
                {replies.length > 0 && (
                  <Comments
                    comments={props.comments}
                    parentId={comment._id}
                    rootId={props.rootId}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
