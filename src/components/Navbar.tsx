
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-montserrat font-bold text-2xl text-primary">
            Ledger<span className="text-secondary">Pro</span>
          </span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-montserrat font-medium text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-montserrat font-medium text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/services" className="font-montserrat font-medium text-gray-700 hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/contact" className="font-montserrat font-medium text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <Button asChild className="bg-primary hover:bg-primary-hover text-white">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-4 space-y-1 flex flex-col">
            <Link 
              to="/" 
              className="font-montserrat block px-3 py-3 font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-montserrat block px-3 py-3 font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="font-montserrat block px-3 py-3 font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="font-montserrat block px-3 py-3 font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="px-3 py-3">
              <Button asChild className="w-full bg-primary hover:bg-primary-hover text-white">
                <Link to="/contact" onClick={toggleMenu}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
