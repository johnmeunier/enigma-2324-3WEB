import {
  Link,
  Outlet
} from "react-router-dom";

import './App.css';

function App() {
 
  return (
    <div className="App">
      <h1>Enigma</h1>
      <nav>
        <Link to="/game-of-life">Game Of Life</Link>
        <Link to="/pokemon">Pokemon</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
