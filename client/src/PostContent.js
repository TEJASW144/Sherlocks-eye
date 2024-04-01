import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

function PostContent(props) {
  return (
    <div>
      <h5 className="text-gray-600 mb-1">
        Posted by {props.author} at: {props.postedAt}
      </h5>

      <h2 className="text-3xl mb-3 text-gray-200">{props.title}</h2>
      <div className="text-sm leading-6">
        <ReactMarkdown remarkPlugins={[gfm]} children={props.body} />
      </div>
    </div>
  );
}
export default PostContent;
