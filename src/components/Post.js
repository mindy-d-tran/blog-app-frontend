import Comment from "./Comment";
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

function Post({ post }) {

  const userCtx = useContext(UserContext);
  const { user } = userCtx;

  const [singlePost, setSinglePost] = useState(post);

  const handleOnClickLike = async () => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/posts/${singlePost._id}/unlike`,
        { user_id: user._id }
      );
      console.log(res.data);
      setSinglePost(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnClickUnlike = async () => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/posts/${singlePost._id}/like`,
        { user_id: user._id }
      );
      console.log(res.data);
      setSinglePost(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {singlePost ? (
        <div className="post">
          <section className="post-body">
            <img className="user-post-icon" src="" alt="user icon" />
            <p>{singlePost.user_id.username}</p>
            <Link to={`/post/${post._id}`}>
              <h2>{singlePost.post_title}</h2>
              {singlePost.post_content.img ? (
                <img className="post-img" src="" alt="post img" />
              ) : (
                <></>
              )}

              <p className="post-content">{singlePost.post_content.text}</p>
            </Link>

            <p>hash tags</p>
            <section className="postbuttons">
              {singlePost.post_likes.find((p) => p.user_id === user._id) ? (
                <FontAwesomeIcon onClick={handleOnClickLike} icon={faHeart} />
              ) : (
                <FontAwesomeIcon
                  onClick={handleOnClickUnlike}
                  icon={fasHeart}
                />
              )}
              <FontAwesomeIcon icon={faComment} />
              <FontAwesomeIcon icon={faShareFromSquare} />
            </section>
          </section>

          <section className="comment-list">
            <Comment />
          </section>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default Post;
