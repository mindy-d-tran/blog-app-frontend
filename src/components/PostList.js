import Post from "./Post";
import { PostsContext } from "../context/PostsContext";
import { useContext } from "react";
import NewCommentForm from "./NewPostForm";

function PostList() {
  const postsCtx = useContext(PostsContext);
  const {posts} = postsCtx;

  return (
    <section className='post-list'>
      <NewCommentForm/>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
