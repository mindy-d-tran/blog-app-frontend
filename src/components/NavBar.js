import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const navBarItems = [
    { text: "Home", href: "/" },
    { text: "Settings", href: "/settings" },
  ];

  return (
    <nav>
      <ul>
      {navBarItems.map((n,i) => (
          <li key={i}>
            <Link to={n.href}>{n.text}</Link>
          </li>
      ))}
      {/* <li>
          <form>
            <input type="text" placeholder="Search" />
            <button>search</button>
          </form>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
