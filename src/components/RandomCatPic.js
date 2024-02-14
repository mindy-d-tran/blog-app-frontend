import axios from "axios";
import { useEffect, useState } from "react";
import './RandomCatPic.css';

function RandomCatPic() {
  const [catImg, setCatImg] = useState(null);

  useEffect(() => {
    try {
      const createPost = async () => {
        const res = await axios.get(
          `https://api.thecatapi.com/v1/images/search`
        );
        setCatImg(res.data);
        // console.log(res.data.url);
      };
      createPost();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="random-cat-pic">
      {catImg ? (
        <>
          <img src={catImg[0].url} alt="cat" />
          <h1>random cat pic</h1>
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default RandomCatPic;
