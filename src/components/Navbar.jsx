import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/2020 Misison Logo Best.png" alt="20/20 Mission Logo" className="h-12 w-12" />
              <span className="text-3xl font-heading font-bold text-primary">20/20 Mission</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium flex items-center">
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-light hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link to="/team" className="block px-4 py-3 text-gray-700 hover:bg-light hover:text-primary transition-colors">
                  Our Team
                </Link>
              </div>
            </div>

            {/* Programs & Initiatives Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium flex items-center">
                Programs & Initiatives
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/glasses-collection" className="block px-4 py-3 text-gray-700 hover:bg-light hover:text-primary transition-colors">
                  Glasses Collection Process
                </Link>
                <Link to="/eyeglasses-trips" className="block px-4 py-3 text-gray-700 hover:bg-light hover:text-primary transition-colors">
                  Eyeglasses Trips with Rayjon
                </Link>
              </div>
            </div>

            <Link to="/get-involved" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
              Get Involved
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
              Contact Us
            </Link>
            <a href="#donate" className="btn-primary">
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-light hover:text-primary rounded-md">
              Home
            </Link>
            
            <div>
              <button
                onClick={() => setAboutDropdown(!aboutDropdown)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-light hover:text-primary rounded-md flex justify-between items-center"
              >
                About Us
                <svg className={`w-4 h-4 transform ${aboutDropdown ? 'rotate-180' : ''} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutDropdown && (
                <div className="pl-4">
                  <Link to="/about" className="block px-3 py-2 text-gray-600 hover:bg-light hover:text-primary rounded-md">
                    About Us
                  </Link>
                  <Link to="/team" className="block px-3 py-2 text-gray-600 hover:bg-light hover:text-primary rounded-md">
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setProgramsDropdown(!programsDropdown)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-light hover:text-primary rounded-md flex justify-between items-center"
              >
                Programs & Initiatives
                <svg className={`w-4 h-4 transform ${programsDropdown ? 'rotate-180' : ''} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {programsDropdown && (
                <div className="pl-4">
                  <Link to="/glasses-collection" className="block px-3 py-2 text-gray-600 hover:bg-light hover:text-primary rounded-md">
                    Glasses Collection Process
                  </Link>
                  <Link to="/eyeglasses-trips" className="block px-3 py-2 text-gray-600 hover:bg-light hover:text-primary rounded-md">
                    Eyeglasses Trips with Rayjon
                  </Link>
                </div>
              )}
            </div>

            <Link to="/get-involved" className="block px-3 py-2 text-gray-700 hover:bg-light hover:text-primary rounded-md">
              Get Involved
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-light hover:text-primary rounded-md">
              Contact Us
            </Link>
            <a href="#donate" className="block mx-3 my-2 btn-primary text-center">
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
