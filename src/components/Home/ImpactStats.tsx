import React from 'react';
import { Home, Users, Calendar, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: Home,
    value: '143',
    label: 'Homes Built',
    description: 'Families served with safe, affordable housing',
  },
  {
    icon: Calendar,
    value: '6-8',
    label: 'Homes Per Year',
    description: 'Consistent impact in our community',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Volunteers Annually',
    description: 'Community members making a difference',
  },
  {
    icon: Heart,
    value: '$2.5M',
    label: 'Community Investment',
    description: 'Total value of homes and services provided',
  },
];

export default function ImpactStats() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Impact in Rowan County
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Together, we're building stronger communities one home at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-habitat-blue rounded-2xl mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-habitat-blue mb-2">
                {stat.value}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}