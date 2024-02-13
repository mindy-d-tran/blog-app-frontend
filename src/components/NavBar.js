import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/create-post">Create Post</Link>
        </li> */}
        <li>
          <Link to="/setting">Setting</Link>
        </li>
        <li>
          <form>
            <input type="text" placeholder="Search" />
            <button>search</button>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
