import React from 'react';
import { motion } from 'framer-motion';

// Mock partner data - in production this would come from your database
const partners = [
  { id: '1', name: 'Lowe\'s', logo: 'https://via.placeholder.com/200x80/005596/FFFFFF?text=Lowe%27s' },
  { id: '2', name: 'Home Depot', logo: 'https://via.placeholder.com/200x80/54B948/FFFFFF?text=Home+Depot' },
  { id: '3', name: 'Bank of America', logo: 'https://via.placeholder.com/200x80/005596/FFFFFF?text=Bank+of+America' },
  { id: '4', name: 'Wells Fargo', logo: 'https://via.placeholder.com/200x80/54B948/FFFFFF?text=Wells+Fargo' },
  { id: '5', name: 'Duke Energy', logo: 'https://via.placeholder.com/200x80/005596/FFFFFF?text=Duke+Energy' },
  { id: '6', name: 'Food Lion', logo: 'https://via.placeholder.com/200x80/54B948/FFFFFF?text=Food+Lion' },
];

export default function Partners() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Community Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Working together with local businesses and organizations to build stronger communities
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: [0, -100 * partners.length] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-48 h-20 bg-white dark:bg-gray-700 rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in partnering with us?
          </p>
          <a
            href="/contact"
            className="btn-outline"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}