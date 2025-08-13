export default function HistoryList({ history, onSelect }) {
  if (!history.length) return null;
  return (
    <div className="mt-4">
      <h3 className="font-bold">Recent Searches</h3>
      <ul>
        {history.map(city => (
          <li key={city} className="cursor-pointer hover:underline" onClick={() => onSelect(city)}>{city}</li>
        ))}
      </ul>
    </div>
  );
}