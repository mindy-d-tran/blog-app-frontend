import PostDetail from "../components/PostDetail";
import { useParams } from "react-router-dom";

function PostPage() {
  const param = useParams();
  // console.log(param.id);
  return (
    <>
      <PostDetail id={param.id} />
    </>
  );
}

export default PostPage;
