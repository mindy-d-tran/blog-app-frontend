import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";
function CommentsList({ comments }) {
  return (
    <section className="comment-list">
      <NewCommentForm/>
      {comments.map((c) => (
        <Comment key={c._id} comment={c} />
      ))}
    </section>
  );
}

export default CommentsList;
