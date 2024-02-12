function SettingPage() {
  return (
    <div>
      <h2>Setting Page</h2>
      <div>
        <img src="" alt="profile pic" />
        <p>Username</p>
      </div>
      <form>
        <label> Email
            <input type="text" placeholder="Email" />
        </label>
      </form>
      <form>
        <label> Password
            <input type="text" placeholder="Current Password" />
            <input type="text" placeholder="New Password" />
        </label>
      </form>
    </div>
  );
}

export default SettingPage;
