import SignInUp from "../components/SignInUp";
import Logo from "../assets/bear_logo_launch.png";

import "./MainPage.css";

function MainPage() {
  return (
    <div className="launch-page">
      <div className="hero-area">
        <img className="logo-big" src={Logo} alt="logo big" />
        <h1>Blog App</h1>
      </div>
      <SignInUp />
    </div>
  );
}

export default MainPage;
