
import PostList from "../components/PostList";

import { useState, useEffect } from "react";
import axios from "axios";

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
  return <PostList posts={posts} />;
}

export default HomePage;
