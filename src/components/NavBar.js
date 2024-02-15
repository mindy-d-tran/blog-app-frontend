import "./NavBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
function NavBar() {
  const userCtx = useContext(UserContext);
  const { user, setUser } = userCtx;
  const navBarItems = [
    { text: "Home", href: "/" },
    { text: "Settings", href: "/settings" },
  ];

  return (
    <nav>
      {user ? (
        <ul>
          {navBarItems.map((n, i) => (
            <li key={i}>
              <Link to={n.href}>{n.text}</Link>
            </li>
          ))}
          <li
            onClick={() => {
              setUser(null);
              localStorage.removeItem("user");
              redirect("/");
            }}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
          </li>
          {/* <li>
          <form>
            <input type="text" placeholder="Search" />
            <button>search</button>
          </form>
        </li> */}
        </ul>
      ) : (
        <ul>
          <li></li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
