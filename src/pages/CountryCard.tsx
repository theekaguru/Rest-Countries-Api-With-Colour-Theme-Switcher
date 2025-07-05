import { useState } from 'react';
import data from '../data.json';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export const CountryCard = () => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  // Filter countries by search and region
  const filteredCountries = data.filter((country: any) => {
    const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="bg-base-200 min-h-screen px-2 sm:px-6 py-8 max-w-7xl mx-auto">
      {/* Search and Filter Row */}
      <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
        {/* Search */}
        <div className="w-full md:w-1/3">
          <label className="input input-bordered flex items-center gap-2 bg-base-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
            <input
              type="text"
              className="grow bg-base-100"
              placeholder="Search for a country..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </label>
        </div>
        {/* Filter by Region */}
        <div className="w-full md:w-1/6">
          <select
            className="select select-bordered w-full bg-base-100"
            value={region}
            onChange={e => setRegion(e.target.value)}
          >
            <option value="">Filter by Region</option>
            {regions.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Country Cards Grid */}
      <div className="grid w-full gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCountries.map((country: any) => (
          <div key={country.name} className="bg-base-100 w-full rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
            <img src={country.flags?.svg || country.flag} alt={country.name} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h2 className="font-bold text-lg mb-2">{country.name}</h2>
              <p className="text-sm mb-1"><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
              <p className="text-sm mb-1"><span className="font-semibold">Region:</span> {country.region}</p>
              <p className="text-sm"><span className="font-semibold">Capital:</span> {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
