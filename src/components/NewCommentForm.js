import axios from "axios";
import { useState, useContext } from "react";

import { UserContext } from "../context/UserContext";
import { CommentContext } from "../context/CommentContext";

import ProfilePic from "../assets/cat_logo_transparent.png";
import './NewCommentForm.css'

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
      const res = await axios.post(`https://blog-app-0no1.onrender.com/api/comments`, {
        user_id: user._id,
        post_id: postID,
        comment_content: newComment,
      });
      console.log(res.data);
      const resComments = await axios.get(
        `https://blog-app-0no1.onrender.com/api/comments/post/${postID}`
      );
      setComments(resComments.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-container">
      <div className="userDisplay-small">
        <img className="user-post-icon" src={ProfilePic} alt="user icon" />
      </div>
      <form className="new-comment-form" onSubmit={handleOnSubmit}>
        <textarea
          id="newComment"
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          type="text"
          value={newComment}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default NewCommentForm;
