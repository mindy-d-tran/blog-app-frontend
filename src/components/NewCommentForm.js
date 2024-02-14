import axios from "axios";
import { useState, useContext } from "react";

import { UserContext } from "../context/UserContext";
import { CommentContext } from "../context/CommentContext";

function NewCommentForm({ postID }) {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  const commentsCtx = useContext(CommentContext);

  const { setComments } = commentsCtx;
  const [newComment, setNewComment] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(newComment);
      const res = await axios.post(`http://localhost:4000/api/comments`, {
        user_id: user._id,
        post_id: postID,
        comment_content: newComment,
      });
      console.log(res.data);
      const resComments = await axios.get(`http://localhost:4000/api/comments/post/${postID}`);
      setComments(resComments.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
        type="text"
        value={newComment}
      />
      <button>submit</button>
    </form>
  );
}

export default NewCommentForm;
