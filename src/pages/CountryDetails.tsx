import { useState } from "react";
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Country } from "./Country";

export const CountryDetails = () => {
    const [theme, setTheme] = useState("light");
  return (
     <div data-theme={theme} className="min-h-screen">
          <Navbar theme={theme} setTheme={setTheme} />
          <Country/>
          <Footer/>
        </div>
  )
}
