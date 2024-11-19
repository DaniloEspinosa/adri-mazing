import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="header">
      <h1 className="title">Welcome {user && <span>{user.name}</span>}</h1>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/blog">
              Blog
            </Link>
            <li>
              <Link className="link" to="/settings">
                Settings
              </Link>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
