function SignInUp(props) {
  return (
    <>
    <div>
        {/* sign up form */}
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
        <input name="username" type="text" placeholder="Username" required />
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
        Already have an account? <button>Sign In</button>
      </span>
    </div>
    {/* sign in form */}
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
        Don't have an account? <button>Sign Up</button>
      </span>
    </div>
    </>
  );
}

export default SignInUp;
