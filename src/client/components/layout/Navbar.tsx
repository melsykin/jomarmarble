import React from 'react';
import { Menu, X, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link to="/" className="flex items-center group">
            <Layers className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <span className="ml-2 text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">Jomar Marble & Granite</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/materials" className="text-gray-700 hover:text-blue-600 transition-colors">Materials</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</Link>
            <Link to="/reviews" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</Link>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/materials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Materials</Link>
            <Link to="/gallery" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Gallery</Link>
            <Link to="/reviews" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Reviews</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}