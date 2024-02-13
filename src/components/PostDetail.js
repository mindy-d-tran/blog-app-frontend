import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

// importing icons from font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as fasHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import CommentsList from "./CommentsList";

function PostDetail({ id }) {

  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  const [post, setPost] = useState(null);
  const [comments, setComments] =useState(null);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const res = await axios.get(`http://localhost:4000/api/posts/${id}/`);
        console.log(res.data);
        setPost(res.data);
      };
      fetchPosts();
      const fetchComments = async()=>{
        const res = await axios.get(`http://localhost:4000/api/comments/post/${id}/`);
        console.log(res.data);
        setComments(res.data);
      }
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleOnClickLike = async () => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/posts/${post._id}/unlike`,
        { user_id: user._id }
      );
      console.log(res.data);
      setPost(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnClickUnlike = async () => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/posts/${post._id}/like`,
        { user_id: user._id }
      );
      console.log(res.data);
      setPost(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {post ? (
        <div className="post">
          <section className="post-body">
            <img className="user-post-icon" src="" alt="user icon" />
            <p>{post.user_id.username}</p>
            <h2>{post.post_title}</h2>
            {post.post_content.img ? (
              <img className="post-img" src="" alt="post img" />
            ) : (
              <></>
            )}

            <p className="post-content">{post.post_content.text}</p>
            <p>hash tags</p>
            <section className="postbuttons">
              {post.post_likes.find((p) => p.user_id === user._id) ? (
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

          <CommentsList comments={comments}/>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default PostDetail;
