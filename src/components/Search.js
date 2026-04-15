const Search = ({ value, onChange }) => {
  return (
    <div>
      <label>Search:</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="ml-2 border border-gray-300"
      />
    </div>
  );
};

export default Search;
