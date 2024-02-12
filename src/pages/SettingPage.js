import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

// importing icons from font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import './SettingPage.css';
// const API_KEY ="live_q6c3JrM10gOEfZinLjnSxMkjOdqR1bToljv8rziaj3d2JoXRsFRvb1AaEUzKKVQ2";
// const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`;

function SettingPage() {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;
  console.log(user);

  const [editProfilePic, setEditProfilePic] = useState(false);
  const [editUsername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  const handleEditProfilePic = () => {
    setEditProfilePic(true);
    console.log(editProfilePic);
  };
  const handleEditUsername = () => {
    setEditUsername(!editUsername);

  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <img onClick={handleEditProfilePic} src="" alt="profile pic" />
        {editUsername ? (
          <form>
            {" "}
            <input type="text" />
          </form>
        ) : (
          <p>
            {user.username}
          </p>
        )}
        <FontAwesomeIcon icon={faPen} onClick={handleEditUsername}/>
      </div>
      <form>
        <label> Email </label>
        {editEmail ? (
          <input type="text" placeholder="Email" />
        ) : (
          <p>
            {user.email} <FontAwesomeIcon icon={faPen} />
          </p>
        )}
      </form>
      <form>
        <label>
          {" "}
          Password
          <input type="text" placeholder="Current Password" />
          <input type="text" placeholder="New Password" />
        </label>
      </form>
    </div>
  );
}

export default SettingPage;
