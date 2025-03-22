
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              AI Agents
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50">
                  Categories
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 animate-scale-in">
                <DropdownMenuItem>
                  <Link to="/category/assistant" className="w-full">Virtual Assistants</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/category/chatbot" className="w-full">Chatbots</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/category/trading" className="w-full">Trading & Investment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/category/automation" className="w-full">Business Automation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/category/all" className="w-full">View All Categories</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/developers" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/developers') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              For Developers
            </Link>
            
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              About
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex" 
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative" 
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-medium">
              2
            </span>
          </Button>
          
          <Avatar className="hidden md:flex">
            <AvatarFallback className="bg-blue-100 text-blue-800">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass shadow-md py-4 animate-slide-down">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/categories') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/developers" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/developers') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                For Developers
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-2 mt-2 border-t border-gray-200">
                <Link 
                  to="/search" 
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Link>
                <Link 
                  to="/profile" 
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
