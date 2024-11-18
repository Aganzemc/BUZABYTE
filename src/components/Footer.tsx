import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">BUZABYTE</span>
            </div>
            <p className="text-sm text-gray-400 sm:text-base">
            Autonomiser grâce à la technologie et au partage des connaissances
            </p>
            <div className="flex pt-2 space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="sm:ml-8">
            <h3 className="mb-4 text-lg font-semibold">Liens rapides </h3>
            <ul className="space-y-2">
              {[     
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/projects', label: 'Projects' },
                { to: '/partners', label: 'Partners' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="block py-1 text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@buzabyte.com" 
                  className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-white"
                >
                  <Mail className="flex-shrink-0 w-5 h-5 text-blue-400" />
                  <span>info@buzabyte.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+243123456789" 
                  className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-white"
                >
                  <Phone className="flex-shrink-0 w-5 h-5 text-blue-400" />
                  <span>+243 123 456 789</span>
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="flex-shrink-0 w-5 h-5 text-blue-400" />
                <span>Bukavu, DR Congo</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter for updates and tech insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-8 text-sm text-center text-gray-400 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} BUZABYTE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}