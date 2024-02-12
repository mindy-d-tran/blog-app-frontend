import { useState, useEffect, useRef } from "react";

import "./SignInUp.css";

function SignInUp(props) {
  // state to change form to sign in or sign up
  const [createAccount, setCreateAccount] = useState(true);

  // var for inputs
  const emailInputRef = useRef(null);
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordCheckInputRef = useRef(null);

  // check if the password is the same for signup
  const handlePasswordCheck = (e) => {
    if (passwordInputRef.current.value !== passwordCheckInputRef.current.value)
      e.target.setCustomValidity("Passwords must match");
    else e.target.setCustomValidity("");
  };

  // handle signup
  const handleSignUp = (e) => {
    e.preventDefault();
    const newUser = {
      email: emailInputRef.current.value,
      username: usernameInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    console.log(newUser);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/");
    };
  }, []);

  return (
    <section>
      {createAccount ? (
        // signup form
        <div>
          <form onSubmit={handleSignUp}>
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
            <label htmlFor="username">Username</label>
            <input
              ref={usernameInputRef}
              name="username"
              type="text"
              placeholder="Username"
              required
            />
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
          <form
          // onSubmit={handleSignUp}
          >
            <h3>Sign In</h3>

            <label htmlFor="emailOrUsername">Email or Username</label>
            <input
              //   ref={emailInputRef}
              name="emailOrUsername"
              id="emailOrUsername"
              type="text"
              placeholder="Email or Username"
              required
            />
            <label htmlFor="passwordSI">Password</label>
            <input
              //   ref={}
              name="passwordSI"
              id="passwordSI"
              type="text"
              placeholder="Password"
            />

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
