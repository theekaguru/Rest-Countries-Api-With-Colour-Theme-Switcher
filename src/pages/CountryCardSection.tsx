import React, { useState } from "react";
import { Link } from "react-router-dom";

// Define country type
interface Country {
  name: string;
  capital: string;
  region: string;
  population: number;
  flags: {
    svg: string;
    alt: string;
  };
}

// Static country data
const countriesData: Country[] = [
  {
    name: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: 81770900,
    flags: {
      svg: "https://flagcdn.com/de.svg",
      alt: "Flag of Germany",
    },
  },
  {
    name: "United States of America",
    capital: "Washington, D.C.",
    region: "Americas",
    population: 323947000,
    flags: {
      svg: "https://flagcdn.com/us.svg",
      alt: "Flag of United States of America",
    },
  },
  {
    name: "Brazil",
    capital: "Brasília",
    region: "Americas",
    population: 206135893,
    flags: {
      svg: "https://flagcdn.com/br.svg",
      alt: "Flag of Brazil",
    },
  },
  {
    name: "Iceland",
    capital: "Reykjavík",
    region: "Europe",
    population: 334300,
    flags: {
      svg: "https://flagcdn.com/is.svg",
      alt: "Flag of Iceland",
    },
  },
  {
    name: "Afghanistan",
    capital: "Kabul",
    region: "Asia",
    population: 27657145,
    flags: {
      svg: "https://flagcdn.com/af.svg",
      alt: "Flag of Afghanistan",
    },
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    region: "Europe",
    population: 28875,
    flags: {
      svg: "https://flagcdn.com/ax.svg",
      alt: "Flag of Åland Islands",
    },
  },
  {
    name: "Albania",
    capital: "Tirana",
    region: "Europe",
    population: 2886026,
    flags: {
      svg: "https://flagcdn.com/al.svg",
      alt: "Flag of Albania",
    },
  },
  {
    name: "Algeria",
    capital: "Algiers",
    region: "Africa",
    population: 40400000,
    flags: {
      svg: "https://flagcdn.com/dz.svg",
      alt: "Flag of Algeria",
    },
  },
];

export const CountryCardSection = () => {
  const [region, setRegion] = useState("All");
  const [search, setSearch] = useState("");

  // Filter logic
  const filteredCountries = countriesData.filter((country) => {
    const matchRegion = region === "All" || country.region === region;
    const matchSearch = country.name.toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <section className="py-16 px-6 bg-base-200 min-h-screen">
      <style>{`
        .spin-card {
          animation: spinIn 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        @keyframes spinIn {
          from { transform: rotateY(90deg); opacity: 0; }
          to { transform: rotateY(0deg); opacity: 1; }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <input
            type="text"
            placeholder="Search for a country..."
            className="input input-bordered w-full md:max-w-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="select select-bordered w-full md:max-w-xs"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="All">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        {/* Empty State */}
        {filteredCountries.length === 0 ? (
          <div className="text-center text-gray-600">No countries found.</div>
        ) : (
          // Cards grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredCountries.map((country) => (
              <Link
                to={`/country/${country.name.toLowerCase()}`}
                key={country.name}
                className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 spin-card"
              >
                <figure>
                  <img
                    src={country.flags.svg}
                    alt={country.flags.alt}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{country.name}</h2>
                  <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                  <p><strong>Region:</strong> {country.region}</p>
                  <p><strong>Capital:</strong> {country.capital}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
