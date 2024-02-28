import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
export default () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <footer>
      Cours Enigma 3WEB{" "}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Passer en {theme === "light" ? "dark" : "light"} mode
      </button>
    </footer>
  );
};
