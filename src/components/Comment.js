import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
// importing icons from font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as fasHeart,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
// importing temp profile icons
import ProfilePic from "../assets/cat_logo_transparent.png";

function Comment({ comment }) {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  const [commentState, setCommentState] = useState(comment);

  // console.log(comment);

  const handleOnClickLike = async () => {
    try {
      const res = await axios.put(
        `https://blog-app-0no1.onrender.com/api/comments/${commentState._id}/unlike`,
        { user_id: user._id }
      );
      console.log(res.data);
      setCommentState(res.data.comment);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnClickUnlike = async () => {
    try {
      const res = await axios.put(
        `https://blog-app-0no1.onrender.com/api/comments/${commentState._id}/like`,
        { user_id: user._id }
      );
      console.log(res.data);
      setCommentState(res.data.comment);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comment">
      <div className="userDisplay-small">
        <img className="user-comment-icon" src={ProfilePic} alt="user icon" />
        <p>{commentState.user_id.username}</p>
      </div>
      <p>{commentState.comment_content}</p>
      <section className="postbuttons">
        <span>
          {commentState.comment_like.find((c) => c.user_id === user._id) ? (
            <FontAwesomeIcon onClick={handleOnClickLike} icon={faHeart} />
          ) : (
            <FontAwesomeIcon onClick={handleOnClickUnlike} icon={fasHeart} />
          )}{" "}
          {commentState.comment_like.length}{" "}
        </span>
        {/* <FontAwesomeIcon icon={faShareFromSquare} /> */}
      </section>
    </div>
  );
}

export default Comment;
