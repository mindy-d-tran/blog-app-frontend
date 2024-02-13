import Comment from "./Comment";
function CommentsList({ comments }) {
  return (
    <section className="comment-list">
      {comments.map((c) => (
        <Comment key={c._id} comment={c} />
      ))}
    </section>
  );
}

export default CommentsList;
