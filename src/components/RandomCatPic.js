import axios from "axios";
import { useEffect, useState } from "react";
function RandomCatPic() {
  const [catImg, setCatImg] = useState(null);

  useEffect(() => {
    try {
      const createPost = async () => {
        const res = await axios.get(
          `https://api.thecatapi.com/v1/images/search`
        );
        setCatImg(res.data);
        console.log(res.data);
      };
      createPost();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {catImg ? (
        <>
          <h1>random cat pic</h1>
          <img src={catImg.url} alt="cat photo" />
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default RandomCatPic;
