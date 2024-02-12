import SignInUp from "../components/SignInUp";
import Logo from '../assets/bear_logo_transparent.png'
function MainPage(){
    return (
        <div>
            <div>
            <h1>main page</h1>
                <img className="logo-big" src={Logo} alt="logo big" />
            </div>
            <SignInUp/>
        </div>
    )
}

export default MainPage;