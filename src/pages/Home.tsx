import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { CountryCardSection } from "./CountryCardSection"

interface HomeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Home = ({ theme, setTheme }: HomeProps) => {
  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <Navbar theme={theme} setTheme={setTheme} />
      <CountryCardSection/>
      <Footer/>
    </div>
  )
}
