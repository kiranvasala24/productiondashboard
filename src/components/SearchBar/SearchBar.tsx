import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.currentTarget.elements[0] as HTMLInputElement).value;
    onSearch(input);
  };

  return (
    <form className="w-full max-w-[512px]" onSubmit={handleSubmit}>
      <div className="flex items-center w-full bg-card border border-border rounded-md px-3 h-10">
        <Search className="w-[18px] h-[18px] mr-2 text-muted-foreground flex-shrink-0" />
        <input 
          type="text" 
          placeholder={placeholder}
          className="flex-grow bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground placeholder:opacity-80"
        />
      </div>
    </form>
  );
};

export default SearchBar;
