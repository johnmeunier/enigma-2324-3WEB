import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

export default () => {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <Header />
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Outlet />
        <Footer />
      </ThemeContext.Provider>
    </>
  );
};
