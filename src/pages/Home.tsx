import { useState, useEffect } from "react";
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { CountryCardSection } from "./CountryCardSection"


export const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <Navbar theme={theme} setTheme={setTheme} />
      <CountryCardSection/>
      <Footer/>
    </div>
  )
}
