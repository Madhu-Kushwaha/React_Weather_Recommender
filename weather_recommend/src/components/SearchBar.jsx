import { useState } from 'react';
import { filterCities } from '../utils/cities';
import { useDebouncedValue } from '../hooks/useDebounceValue'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const debounced = useDebouncedValue(query);
  const suggestions = debounced ? filterCities(debounced) : [];

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search city..."
        className="border px-2 py-1 rounded"
      />
      {suggestions.length > 0 && (
        <ul className="border mt-1 bg-white">
          {suggestions.map(city => (
            <li key={city} onClick={() => { setQuery(city); onSearch(city); }} className="p-1 cursor-pointer hover:bg-gray-200">{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
}