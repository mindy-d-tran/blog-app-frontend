import Post from "./Post";

function PostList({ posts }) {
  return (
    <section>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
