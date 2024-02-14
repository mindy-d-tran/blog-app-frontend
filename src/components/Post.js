// importing icons from font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as fasHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { useContext, useState } from "react";
import ProfilePic from "../assets/cat_logo_transparent.png";

import axios from "axios";
import { UserContext } from "../context/UserContext";

import { Link } from "react-router-dom";

function Post({ post }) {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;

  // need this to make the like or unlike button change icon
  const [postState, setPostState] = useState(post);

  const handleOnClickLike = async () => {
    try {
      const res = await axios.put(
        `https://blog-app-0no1.onrender.com/api/posts/${postState._id}/unlike`,
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
        `https://blog-app-0no1.onrender.com/api/posts/${postState._id}/like`,
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
          <div className="userDisplay-small">
            <img className="user-post-icon" src={ProfilePic} alt="user icon" />
            <p>{postState.user_id.username}</p>
          </div>

          <Link to={`/post/${post._id}`}>
            <h2>{postState.post_title}</h2>
            <section className="post-img-gallery">
              {postState.post_content.img.length > 0 ? (
                postState.post_content.img.map((img, i) => (
                  <img key={i} className="post-img" src={img} alt="post img" />
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
            <span>
              <FontAwesomeIcon icon={faChartSimple} /> {post.post_views}{" "}
            </span>
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
