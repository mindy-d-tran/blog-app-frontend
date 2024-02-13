import Post from "./Post";

function PostList({ posts }) {
  return (
    <section className='post-list'>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
