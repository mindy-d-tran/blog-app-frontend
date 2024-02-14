import Post from "./Post";
import { PostsContext } from "../context/PostsContext";
import { useContext } from "react";
import NewPostForm from "./NewPostForm";

function PostList() {
  const postsCtx = useContext(PostsContext);
  const { posts } = postsCtx;

  return (
    <section className="post-list">
      <NewPostForm />
      {posts.length>0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p>loading</p>
      )}
    </section>
  );
}

export default PostList;
