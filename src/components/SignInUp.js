import { useState, useRef, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

import "./SignInUp.css";

function SignInUp(props) {
  const userCtx = useContext(UserContext);
  const { setUser } = userCtx;

  // states
  const [createAccount, setCreateAccount] = useState(true); // state to change form to sign in or sign up
  const [errMsg, setErrMsg] = useState("");

  // var for sign up inputs
  const emailInputRef = useRef(null);
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordCheckInputRef = useRef(null);

  // var for sign in inputs
  const emailOrUsernameInputRef = useRef(null);
  const passwordSIInputRef = useRef(null);

  // check if the password is the same for signup
  // help from https://stackoverflow.com/questions/45101515/why-setcustomvalidity-not-working-in-react-app
  const handlePasswordCheck = (e) => {
    if (passwordInputRef.current.value !== passwordCheckInputRef.current.value)
      e.target.setCustomValidity("Passwords must match");
    else e.target.setCustomValidity("");
  };

  // handle signup
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://blog-app-0no1.onrender.com/api/users", {
        email: emailInputRef.current.value,
        username: usernameInputRef.current.value,
        password: passwordInputRef.current.value,
      });

      console.log(res.data);
      setUser(res.data);
      setErrMsg("");
    } catch (error) {
      console.log(error);
      setErrMsg(error.response.data);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("https://blog-app-0no1.onrender.com/api/users/login", {
        emailOrUsername: emailOrUsernameInputRef.current.value,
        password: passwordSIInputRef.current.value,
      });

      console.log(res.data);
      setUser(res.data);
      setErrMsg("");
    } catch (error) {
      console.log(error);
      setErrMsg(error.response.data);
    }
  };

  return (
    <section>
      {createAccount ? (
        // signup form
        <div>
          <form className="sign-in-up-form" onSubmit={handleSignUp}>
            <h3>Sign Up</h3>
            <label htmlFor="email">Email</label>
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />

            {errMsg.includes("Email") ? <p>{errMsg}</p> : <></>}

            <label htmlFor="username">Username</label>
            <input
              ref={usernameInputRef}
              name="username"
              type="text"
              placeholder="Username"
              required
            />

            {errMsg.includes("Username") ? <p>{errMsg}</p> : <></>}

            <label htmlFor="password">Password</label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="text"
              placeholder="Password"
            />
            <label htmlFor="passwordCheck">Confirm Password</label>
            <input
              ref={passwordCheckInputRef}
              onChange={handlePasswordCheck}
              id="passwordCheck"
              name="passwordCheck"
              type="text"
              placeholder="Confirm Password"
            />
            <button type="submit">Sign Up</button>
          </form>
          <span>
            Already have an account?{" "}
            <button onClick={() => setCreateAccount(!createAccount)}>
              Sign In
            </button>
          </span>
        </div>
      ) : (
        // sign in form
        <div>
          <form className="sign-in-up-form" onSubmit={handleSignIn}>
            <h3>Sign In</h3>

            <label htmlFor="emailOrUsername">Email or Username</label>
            <input
              ref={emailOrUsernameInputRef}
              name="emailOrUsername"
              id="emailOrUsername"
              type="text"
              placeholder="Email or Username"
              required
            />

            {errMsg.includes(["Can't"]) ? <p>{errMsg}</p> : <></>}

            <label htmlFor="passwordSI">Password</label>
            <input
              ref={passwordSIInputRef}
              name="passwordSI"
              id="passwordSI"
              type="password"
              placeholder="Password"
            />

            {errMsg.includes(["match"]) ? <p>{errMsg}</p> : <></>}

            <button type="submit">Sign In</button>
          </form>
          <span>
            Don't have an account?{" "}
            <button onClick={() => setCreateAccount(!createAccount)}>
              Sign Up
            </button>
          </span>
        </div>
      )}
    </section>
  );
}

export default SignInUp;
