import axios from "axios";
import { useState, useContext } from "react";

import { UserContext } from "../context/UserContext";
import { PostsContext } from "../context/PostsContext";
import ProfilePic from "../assets/cat_logo_transparent.png";

function NewPostForm() {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;

  const postsCtx = useContext(PostsContext);
  const { setPosts } = postsCtx;

  const [newPostContent, setNewPostContent] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/api/posts`, {
        user_id: user._id,
        post_content: {
          text: newPostContent,
        },
        post_title: newPostTitle,
      });
      console.log(res.data);
      const resPosts = await axios.get(`http://localhost:4000/api/posts`);
      setPosts(resPosts.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-post-container">
      <div className="userDisplay-small">
        <img className="user-post-icon" src={ProfilePic} alt="user icon" />
      </div>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={(e) => {
            setNewPostTitle(e.target.value);
          }}
          type="text"
          value={newPostTitle}
          placeholder="Title"
        />
        <input
          onChange={(e) => {
            setNewPostContent(e.target.value);
          }}
          type="text"
          value={newPostContent}
          placeholder="Text"
        />
        <button>Post</button>
      </form>
    </div>
  );
}

export default NewPostForm;
