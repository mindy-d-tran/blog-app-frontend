import { useState, useEffect } from "react";
import axios from "axios";

// importing context
import { CommentContext } from "../context/CommentContext";

// importing components
import CommentsList from "./CommentsList";
import Post from "./Post";

function PostDetail({ id }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const res = await axios.get(`http://localhost:4000/api/posts/${id}/`);
        console.log(res.data);
        setPost(res.data);
      };
      fetchPosts();
      const fetchComments = async () => {
        const res = await axios.get(
          `http://localhost:4000/api/comments/post/${id}/`
        );
        console.log(res.data);
        setComments(res.data);
      };
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {post ? (
        <div className="post-comment">
          <Post post={post} />{" "}
          <CommentContext.Provider value={{ comments, setComments }}>
            <CommentsList postID={id} />{" "}
          </CommentContext.Provider>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default PostDetail;
