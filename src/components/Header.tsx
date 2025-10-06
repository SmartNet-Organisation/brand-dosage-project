import React, { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
<<<<<<< HEAD
      element.scrollIntoView({
=======
      element.scrollIntoView({ 
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleGetStarted = () => {
    setIsMenuOpen(false);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
<<<<<<< HEAD
      contactSection.scrollIntoView({
=======
      contactSection.scrollIntoView({ 
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
<<<<<<< HEAD
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
=======
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
            className="flex items-center space-x-3 group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => handleNavClick('#home')}
          >
            <div className="relative">
<<<<<<< HEAD
              <img
                src="/logo.jpeg"
                alt="BrandDosage Logo"
=======
              <img 
                src="/logo.jpeg" 
                alt="BrandDosage Logo" 
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <div className={`font-bold text-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
<<<<<<< HEAD
                BRANDDOSAGE
=======
                BrandDosage
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
              </div>
              <div className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                Experiential Marketing
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
<<<<<<< HEAD
                className={`font-medium transition-all duration-300 hover:text-green-500 transform hover:scale-105 ${isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
=======
                className={`font-medium transition-all duration-300 hover:text-green-500 transform hover:scale-105 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:block">
<<<<<<< HEAD
            <button
=======
            <button 
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
              onClick={handleGetStarted}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg animate-slide-in-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 font-medium hover:text-green-500 transition-all duration-300 transform hover:scale-105 text-left"
                >
                  {item.name}
                </button>
              ))}
<<<<<<< HEAD
              <button
=======
              <button 
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
                onClick={handleGetStarted}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors mt-4"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;