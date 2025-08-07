import React from 'react';
import { Plane, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'News & Media', href: '#news' }
    ],
    services: [
      { name: 'Avionics', href: '#services' },
      { name: 'Defense Systems', href: '#services' },
      { name: 'Autonomous Drones', href: '#services' },
      { name: 'Custom Solutions', href: '#contact' }
    ],
    support: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Technical Support', href: '#support' },
      { name: 'Training Programs', href: '#training' },
      { name: 'Contact Us', href: '#contact' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Plane className="w-8 h-8 text-orange-400" />
                <span className="text-xl font-bold">Sentrix Labs</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Pioneering indigenous aerospace and defense technology solutions with cutting-edge 
                innovation and uncompromising reliability.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3" />
                  <a href="mailto:info@sentrixlabs.com" className="hover:text-orange-400 transition-colors">
                    info@sentrixlabs.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+91 (11) 4567-8900</span>
                </div>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-4 h-4 mr-3 mt-1" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest updates on our innovations and industry insights.
              </p>
            </div>
            <div>
              <form className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400">
              <p>&copy; {currentYear} Sentrix Labs. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#security" className="hover:text-orange-400 transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;