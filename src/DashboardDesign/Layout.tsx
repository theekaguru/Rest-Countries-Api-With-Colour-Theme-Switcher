import { Outlet } from "react-router"
import { CountryCardSection } from "../pages/CountryCardSection"


export const Layout = () => {
  return (
    <div>
        <div>
            <CountryCardSection/>
            <Outlet/>
        </div>
    </div>
  )
}
