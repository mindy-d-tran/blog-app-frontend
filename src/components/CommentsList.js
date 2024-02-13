import { useContext } from "react";

// importing components
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

// importing context
import { CommentContext } from "../context/CommentContext";

function CommentsList({  postID }) {
  const commentsCtx = useContext(CommentContext);
  const {comments} = commentsCtx;
  return (
    <section className="comment-list">
      <NewCommentForm postID={postID}/>
      {comments.map((c) => (
        <Comment key={c._id} comment={c} postID={postID}/>
      ))}
    </section>
  );
}

export default CommentsList;
