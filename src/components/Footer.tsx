import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handlePhoneClick = () => {
    window.open('https://wa.me/2348089111646', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@branddosage.com', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/branddosage?igsh=OTRsZG13c21kemp5', '_blank');
  };

  // Custom X (Twitter) icon component
  const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
<<<<<<< HEAD
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
=======
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
    </svg>
  );

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
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
<<<<<<< HEAD
                <div className="font-bold text-lg text-white">BRANDDOSAGE</div>
=======
                <div className="font-bold text-lg text-white">BrandDosage</div>
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
                <div className="text-sm text-gray-400">Experiential Marketing</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
<<<<<<< HEAD
              Building brands and delivering solutions through innovative experiential marketing campaigns
=======
              Building brands and delivering solutions through innovative experiential marketing campaigns 
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
              that drive engagement and create lasting impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-black rounded-full flex items-center justify-center transition-colors">
                <XIcon className="w-5 h-5" />
              </a>
<<<<<<< HEAD
              <button
=======
              <button 
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
                onClick={handleInstagramClick}
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-green-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Event Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Brand Activations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Interactive Experiences</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Retail Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Campaign Strategy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
<<<<<<< HEAD
                  <button
=======
                  <button 
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
                    onClick={handleEmailClick}
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                  >
                    info@branddosage.com
                  </button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
<<<<<<< HEAD
                  <button
=======
                  <button 
>>>>>>> 5cbf7160c69fff46ca1c6a65c33922497fe413a5
                    onClick={handlePhoneClick}
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                  >
                    08089111646
                  </button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Plot 1, Rumuevolu Street</p>
                  <p className="text-gray-400">Off Adageorge Road, Miniorlu Mgbuoba</p>
                  <p className="text-gray-400">Port Harcourt, Rivers State, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Monday - Friday</p>
                  <p className="text-gray-400">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} BrandDosage Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;