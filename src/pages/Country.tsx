import { useNavigate, useParams } from 'react-router-dom';
import data from '../data.json';

export const Country = () => {
  const navigate = useNavigate();
  const { countryName } = useParams();

  // Find the country by name (decode URI)
  const country = data.find((c: any) => c.name.toLowerCase() === decodeURIComponent(countryName || '').toLowerCase());

  // Get border country names
  const borderNames = country?.borders?.map((borderCode: string) => {
    const borderCountry = data.find((c: any) => c.alpha3Code === borderCode);
    return borderCountry ? borderCountry.name : borderCode;
  }) || [];

  if (!country) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <button className="btn btn-outline mb-4" onClick={() => navigate(-1)}>&larr; Back</button>
        <div className="text-xl font-bold">Country not found</div>
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen px-4 sm:px-12 py-8 flex flex-col">
      <button className="btn btn-outline w-32 mb-8" onClick={() => navigate(-1)}>&larr; Back</button>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Flag */}
        <img src={country.flags?.svg || country.flag} alt={country.name} className="w-full max-w-md h-auto rounded shadow" />
        {/* Details */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">{country.name}</h1>
          <div className="flex flex-col md:flex-row gap-8 mb-6">
            <div className="flex-1 space-y-2">
              <p><span className="font-semibold">Native Name:</span> {country.nativeName}</p>
              <p><span className="font-semibold">Population:</span> {country.population?.toLocaleString()}</p>
              <p><span className="font-semibold">Region:</span> {country.region}</p>
              <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
              <p><span className="font-semibold">Capital:</span> {country.capital}</p>
            </div>
            <div className="flex-1 space-y-2">
              <p><span className="font-semibold">Top Level Domain:</span> {country.topLevelDomain?.join(', ')}</p>
              <p><span className="font-semibold">Currencies:</span> {country.currencies?.map((cur: any) => cur.name).join(', ')}</p>
              <p><span className="font-semibold">Languages:</span> {country.languages?.map((lang: any) => lang.name).join(', ')}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <span className="font-semibold mr-2">Border Countries:</span>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              {borderNames.length > 0 ? borderNames.map((name: string) => (
                <span key={name} className="btn btn-sm btn-outline cursor-default">{name}</span>
              )) : <span>None</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
