import Comment from "./Comment";
// importing icons from font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faShareFromSquare,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

function Post({ post }) {
  const [postUser, setPostUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:4000/api/users/${post.user_id}`
      );
      setPostUser(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {postUser ? (
        <div>
          <section className="post">
            <img className="user-post-icon" src="" alt="user icon" />
            <p>{postUser.username}</p>
            <h2>{post.post_title}</h2>
            {post.post_content.img ? <img className="post-img" src="" alt="post img" />:<></>}
            
            <p className="post-content">{post.post_content.text}</p>
            <p>hash tags</p>
            <section className="postbuttons">
              <FontAwesomeIcon icon={faHeart} />
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
