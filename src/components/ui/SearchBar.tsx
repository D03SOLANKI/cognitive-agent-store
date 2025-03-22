
import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  expanded?: boolean;
}

const SearchBar = ({ 
  placeholder = "Search for AI agents...", 
  className = "",
  expanded = false
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(expanded);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsExpanded(false);
      setQuery('');
    }
  };

  const handleExpandToggle = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!query && !expanded) {
      setIsExpanded(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <form 
        onSubmit={handleSubmit}
        className={`transition-all duration-300 ease-in-out ${
          isExpanded 
            ? 'w-full md:w-[400px]' 
            : 'w-10 h-10 rounded-full'
        }`}
      >
        <div 
          className={`search-glass flex items-center transition-all duration-300 ${
            isExpanded 
              ? 'w-full rounded-full pl-4 pr-2 py-2 border-blue-200' 
              : 'w-10 h-10 rounded-full justify-center cursor-pointer'
          } ${isFocused ? 'ring-2 ring-blue-200' : ''}`}
          onClick={handleExpandToggle}
        >
          <Search 
            className={`min-w-[20px] h-5 text-blue-600 transition-all duration-300 ${
              isExpanded ? 'mr-2' : ''
            }`} 
          />
          
          {isExpanded && (
            <>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
                placeholder={placeholder}
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                aria-label="Search"
              />
              
              {query && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              )}
              
              <button
                type="submit"
                className={`ml-1 p-2 rounded-full bg-blue-600 text-white transition-transform hover:scale-105 ${
                  !query.trim() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!query.trim()}
                aria-label="Submit search"
              >
                <Search className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
