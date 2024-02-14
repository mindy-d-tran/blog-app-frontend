import PostList from "../components/PostList";

import { useState, useEffect } from "react";
import axios from "axios";
import RandomCatPic from "../components/RandomCatPic";

import { PostsContext } from "../context/PostsContext";

import "./HomePage.css";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://blog-app-0no1.onrender.com/api/posts");
      setPosts(res.data);
      // console.log(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="home-page-container">
      <PostsContext.Provider value={{posts, setPosts}}>
        <PostList />
      </PostsContext.Provider>
      <RandomCatPic />
    </div>
  );
}

export default HomePage;
