import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <header>
      <h1>Pokemon</h1>
      <h2>{theme}</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/pokemon">Liste</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
