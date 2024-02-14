import { UserContext } from "../context/UserContext";

import { useContext, useState } from "react";
import axios from "axios";

// importing icons from font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import TempProfilePic from "../assets/cat_logo_transparent.png";

// importing style
import "./SettingPage.css";

// const API_KEY ="live_q6c3JrM10gOEfZinLjnSxMkjOdqR1bToljv8rziaj3d2JoXRsFRvb1AaEUzKKVQ2";
// const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`;

function SettingPage() {
  const userCtx = useContext(UserContext);
  const { user, setUser } = userCtx;

  // states to edit account fields
  const [editProfilePic, setEditProfilePic] = useState(false);
  const [editUsername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  const [errMsg, setErrMsg] = useState(null);

  // states to handle change in input
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");

  // functions to display edit account fields forms
  const handleShowEditProfilePic = () => {
    setEditProfilePic(!editProfilePic);
  };
  const handleShowEditUsername = () => {
    setEditUsername(!editUsername);
  };
  const handleShowEditEmail = () => {
    setEditEmail(!editEmail);
  };

  // handle submitting forms
  const handleSubmitUsername = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:4000/api/users/${user._id}/update-username/`,
        {
          username: username,
        }
      );
      console.log(res.data);
      setUser(res.data);
      setEditUsername(!editUsername);
      setErrMsg(null);
    } catch (error) {
      console.log(error);
      setErrMsg(error.response.data);
    }
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:4000/api/users/${user._id}/update-email/`,
        {
          email: email,
        }
      );

      console.log(res.data);
      setUser(res.data);
      setEditEmail(!editEmail);
      setErrMsg(null);
    } catch (error) {
      console.log(error);
      setErrMsg(error.response.data);
    }
  };

  const handdleSubmitPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:4000/api/users/${user._id}/update-password/`,
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setErrMsg(error.response.data);
    }
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="userDisplay">
        <img
          onClick={handleShowEditProfilePic}
          src={TempProfilePic}
          alt="profile pic"
        />
        {editUsername ? (
          <form onSubmit={handleSubmitUsername}>
            {" "}
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
            />
            {errMsg ? <p>Username is already taken</p> : <></>}
            <button type="submit">submit</button>
          </form>
        ) : (
          <p>{user.username}</p>
        )}
        <FontAwesomeIcon icon={faPen} onClick={handleShowEditUsername} />
      </div>
      <form onSubmit={handleSubmitEmail}>
        <label> Email </label>
        {editEmail ? (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              value={email}
            />

            {errMsg ? <p>Email is already taken</p> : <></>}

            <button type="submit">submit</button>
          </>
        ) : (
          <p>{user.email}</p>
        )}
        <FontAwesomeIcon icon={faPen} onClick={handleShowEditEmail} />
      </form>
      <form onSubmit={handdleSubmitPassword}>
        <label>
          {" "}
          Password</label>
          <input
            onChange={(e) => setcurrentPassword(e.target.value)}
            type="text"
            placeholder="Current Password"
          />
          <input
            onChange={(e) => setnewPassword(e.target.value)}
            type="text"
            placeholder="New Password"
          />
        <button >submit</button>
      </form>
    </div>
  );
}

export default SettingPage;
