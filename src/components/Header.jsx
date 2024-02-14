import { Link } from "react-router-dom";

export default () => (
  <header>
    <h1>Pokemon</h1>
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
