// importing icons from font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as fasHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

import { Link } from "react-router-dom";
import ProfilePic from "../assets/cat_logo_transparent.png";

function Post({ post }) {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;

  const [postState, setPostState] = useState(post);

  const handleOnClickLike = async () => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/posts/${postState._id}/unlike`,
        { user_id: user._id }
      );
      // console.log(res.data);
      setPostState(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnClickUnlike = async () => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/posts/${postState._id}/like`,
        { user_id: user._id }
      );
      // console.log(res.data);
      setPostState(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {postState ? (
        <section className="post-body">
          <div className="userDisplay">
            <img className="user-post-icon" src={ProfilePic} alt="user icon" />
            <p>{postState.user_id.username}</p>
          </div>

          <Link to={`/post/${post._id}`}>
            <h2>{postState.post_title}</h2>
            <section className="post-img-gallery">
              {postState.post_content.img.length > 0 ? (
                postState.post_content.img.map((i) => (
                  <img className="post-img" src={i} alt="post img" />
                ))
              ) : (
                <></>
              )}
            </section>

            <p className="post-content">{postState.post_content.text}</p>
          </Link>

          <p>hash tags</p>
          <section className="postbuttons">
            <span>
              {postState.post_likes.find((p) => p.user_id === user._id) ? (
                <FontAwesomeIcon onClick={handleOnClickLike} icon={faHeart} />
              ) : (
                <FontAwesomeIcon
                  onClick={handleOnClickUnlike}
                  icon={fasHeart}
                />
              )}{" "}
              {postState.post_likes.length}{" "}
            </span>
            <Link to={`/post/${post._id}`}>
              <span>
                <FontAwesomeIcon icon={faComment} />{" "}
                {postState.post_comments.length}{" "}
              </span>
            </Link>
            <FontAwesomeIcon icon={faShareFromSquare} />
          </section>
        </section>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default Post;
