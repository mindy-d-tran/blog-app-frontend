function Comment() {
  return (
    <div className="comment">
      <h3>Comment</h3>
      <img className="user-comment-icon" src="" alt="user icon" />
      <p>Username</p>
      <p>Comment content</p>
      <section className="postbuttons">
        <button className="like">like</button>
        <button className="comment">comment</button>
        <button className="share">share</button>
      </section>
    </div>
  );
}

export default Comment;
