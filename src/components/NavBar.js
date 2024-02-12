import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        {/* <li>
          <Link to="/create-post">Create Post</Link>
        </li> */}
        <li>
          <Link to="/setting">Setting</Link>
        </li>
      </ul>
      <form>
        <input type="text" placeholder="Search" />
      </form>
    </nav>
  );
}

export default NavBar;
