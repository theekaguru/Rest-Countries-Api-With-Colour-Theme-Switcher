import { useState } from "react";
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { CountryCard } from "./CountryCard"


export const Home = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div data-theme={theme} className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <CountryCard/>
      <Footer/>
    </div>
  )
}
