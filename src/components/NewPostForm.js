import axios from "axios";
import { useState, useContext } from "react";

import { UserContext } from "../context/UserContext";
import { PostsContext } from "../context/PostsContext";

function NewCommentForm() {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;

  const postsCtx = useContext(PostsContext);
  const { posts } = postsCtx;

  const [newPost, setNewPost] = useState("");

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(newComment);
//       const res = await axios.post(`http://localhost:4000/api/posts`, {
//         user_id: user._id,
//         post_id: postID,
//         comment_content: newComment,
//       });
//       console.log(res.data);

//       setComments(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
    <form >
      <input
        onChange={(e) => {
          setNewPost(e.target.value);
        }}
        type="text"
        value={newPost}
      />
      <button>submit</button>
    </form>
  );
}

export default NewCommentForm;
