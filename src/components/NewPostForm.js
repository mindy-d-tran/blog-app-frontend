import axios from "axios";
import { useState, useContext } from "react";

import { UserContext } from "../context/UserContext";
import { PostsContext } from "../context/PostsContext";
import ProfilePic from "../assets/cat_logo_transparent.png";

import './NewPostForm.css';

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
      const res = await axios.post(`https://blog-app-0no1.onrender.com/api/posts`, {
        user_id: user._id,
        post_content: {
          text: newPostContent,
        },
        post_title: newPostTitle,
      });
      console.log(res.data);
      const resPosts = await axios.get(`https://blog-app-0no1.onrender.com/api/posts`);
      setPosts(resPosts.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-container">
      <div className="userDisplay-small">
        <img className="user-post-icon" src={ProfilePic} alt="user icon" />
      </div>
      <form className="new-post-form" onSubmit={handleOnSubmit}>
        <input
          onChange={(e) => {
            setNewPostTitle(e.target.value);
          }}
          type="text"
          id="new-post-title"
          value={newPostTitle}
          placeholder="Title"
        />
        <textarea
          onChange={(e) => {
            setNewPostContent(e.target.value);
          }}
          id="new-post-content"
          value={newPostContent}
          placeholder="Text"
        />
        <button>Post</button>
      </form>
    </div>
  );
}

export default NewPostForm;
