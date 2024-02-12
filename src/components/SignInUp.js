import { useState } from "react";

function SignInUp(props) {
  // state to change form to sign in or sign up
  const [createAccount, setCreateAccount] = useState(true);

  return (
    <section>
      {createAccount ? (
        // signup form
        <div>
          <form
            // onSubmit={handleSignUp}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3>Sign Up</h3>

            <input
              //   ref={emailInputRef}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
            <input
              name="username"
              type="text"
              placeholder="Username"
              required
            />
            <input
              //   ref={}
              name="password"
              id="password"
              type="text"
              placeholder="Password"
            />
            <input
              id="passwordCheck"
              name="passwordCheck"
              type="text"
              placeholder="Repeat Password"
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
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3>Sign In</h3>

            <input
              //   ref={emailInputRef}
              name="emailOrUsername"
              id="emailOrUsername"
              type="text"
              placeholder="Email or Username"
              required
            />
            <input
              //   ref={}
              name="password"
              id="password"
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
