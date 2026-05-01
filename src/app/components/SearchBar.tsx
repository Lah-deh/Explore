interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="w-full max-w-xl">
      <input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#111111] border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#cf1247] transition-colors"
      />
    </div>
  )
}

export default SearchBar