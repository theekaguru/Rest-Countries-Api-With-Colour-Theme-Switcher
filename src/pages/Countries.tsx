import { useState, useEffect } from "react";
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const Countries = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Footer/>
        </>
  )
}
