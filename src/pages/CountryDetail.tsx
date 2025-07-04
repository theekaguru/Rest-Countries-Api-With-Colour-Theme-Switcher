import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { countriesData } from "./CountryCardSection";

interface CountryDetailProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const CountryDetail = ({ theme, setTheme }: CountryDetailProps) => {
  const { name } = useParams();
  const navigate = useNavigate();

  // Find the country by name (case-insensitive)
  const country = countriesData.find(
    (c) => c.name.toLowerCase() === (name || "").toLowerCase()
  );

  if (!country) return <div className="text-center py-10">Country not found</div>;

  // For demo, border countries are hardcoded. You can add real data if available.
  const borderCountries = ["France", "Germany", "Netherlands"];

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="container mx-auto py-10 px-4">
        <button onClick={() => navigate(-1)} className="btn mb-8">
          &larr; Back
        </button>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            className="w-full md:w-1/2 h-64 object-cover rounded shadow"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p><b>Population:</b> {country.population.toLocaleString()}</p>
                <p><b>Region:</b> {country.region}</p>
                <p><b>Capital:</b> {country.capital}</p>
                {/* Add more fields as needed */}
              </div>
              <div>
                {/* Add more fields as needed */}
              </div>
            </div>
            <div className="mt-4">
              <b>Border Countries:</b>{" "}
              {borderCountries.map((b) => (
                <button key={b} className="btn btn-sm m-1 opacity-70 cursor-default">{b}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}; 