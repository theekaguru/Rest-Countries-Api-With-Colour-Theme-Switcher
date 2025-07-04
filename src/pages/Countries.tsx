import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

interface CountriesProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Countries = ({ theme, setTheme }: CountriesProps) => {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Footer />
    </>
  )
}
