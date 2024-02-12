import SignInUp from "../components/SignInUp";
import Logo from "../assets/bear_logo_launch.png";

import './MainPage.css';

function MainPage() {
  return (
    <div className="launch-page">
      <div >
        <img className="logo-big" src={Logo} alt="logo big" />
        <h1>main page</h1>
      </div>
      <SignInUp />
    </div>
  );
}

export default MainPage;
