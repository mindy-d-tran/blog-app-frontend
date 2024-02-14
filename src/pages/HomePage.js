import PostList from "../components/PostList";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import RandomCatPic from "../components/RandomCatPic";

import { PostsContext } from "../context/PostsContext";

import "./HomePage.css";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/api/posts");
      setPosts(res.data);
      // console.log(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="home-page-container">
      <PostsContext.Provider value={{posts, setPosts}}>
        <PostList posts={posts} />
      </PostsContext.Provider>
      <RandomCatPic />
    </div>
  );
}

export default HomePage;
