import SignInUp from "../components/SignInUp";
import Logo from "../assets/cat_logo.png";

import { UserContext } from "../context/UserContext";
import { useContext } from "react";

import "./MainPage.css";
import HomePage from "./HomePage";

function MainPage() {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;

  return (
    <>
      {user ? (
        <>
          <HomePage />
        </>
      ) : (
        <>
          <div className="launch-page">
            <div className="hero-area">
              <img className="logo-big" src={Logo} alt="logo big" />
              <h1>Blog App</h1>
            </div>
            <SignInUp />
          </div>
        </>
      )}
    </>
  );
}

export default MainPage;
