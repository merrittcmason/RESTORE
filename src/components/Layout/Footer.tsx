import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Own a Home', href: '/own-a-home' },
  { name: 'Locations', href: '/locations' },
  { name: 'News', href: '/news' },
  { name: 'Ways to Donate', href: '/donate' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-habitat-blue rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">Habitat for Humanity</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Rowan County</div>
              </div>
            </Link>
            
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>P.O. Box 3356, Salisbury, NC 28145-3356</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(704) 642-6292</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@habitatrowan.org</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-habitat-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-habitat-blue rounded-lg p-1"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-habitat-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-habitat-blue rounded-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2">
              {navigation.slice(4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-habitat-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-habitat-blue rounded-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
              <Link to="/privacy" className="hover:text-habitat-blue transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-habitat-blue transition-colors duration-200">
                Terms of Service
              </Link>
              <ThemeToggle />
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-300 text-center md:text-right">
              <p>© 2025 Habitat for Humanity of Rowan County, NC</p>
              <p>
                Designed by{' '}
                <a
                  href="https://merrittmason.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-habitat-blue hover:underline focus:outline-none focus:ring-2 focus:ring-habitat-blue rounded"
                >
                  Merritt Mason
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}