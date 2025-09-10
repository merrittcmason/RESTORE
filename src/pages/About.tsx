import React from 'react';
import { Heart, Target, Eye, User, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'About Habitat', href: '#about-habitat' },
  { name: 'Mission', href: '#mission' },
  { name: 'Vision', href: '#vision' },
  { name: 'President', href: '#president' },
  { name: 'Staff', href: '#staff' },
  { name: 'History', href: '#history' },
];

// Mock staff data - in production this would come from your database
const staff = [
  {
    id: 1,
    name: 'Merritt Mason',
    role: 'Manager',
    contact: 'merritt@company.com',
    bio: 'Merritt has been leading our organization with passion and dedication for over 5 years. With a background in nonprofit management and community development, she brings valuable experience to our mission of building homes and hope.',
  },
  {
    id: 2,
    name: 'Nate Kiflemariam',
    role: 'Developer',
    contact: 'nate@company.com',
    bio: 'Nate oversees our construction projects and volunteer coordination. His expertise in sustainable building practices and community engagement has been instrumental in our recent growth and success.',
  },
];

const historyMilestones = [
  {
    year: '1995',
    title: 'Habitat Rowan Founded',
    description: 'Local volunteers established Habitat for Humanity of Rowan County to address affordable housing needs in our community.',
  },
  {
    year: '1997',
    title: 'First Home Built',
    description: 'Completed our first home on Oak Street, beginning our journey of building hope one family at a time.',
  },
  {
    year: '2003',
    title: 'ReStore Opens',
    description: 'Opened our ReStore to provide funding for builds while offering affordable home improvement items to the community.',
  },
  {
    year: '2010',
    title: '50th Home Milestone',
    description: 'Celebrated building our 50th home, marking a significant milestone in our community impact.',
  },
  {
    year: '2015',
    title: 'Expanded Operations',
    description: 'Moved to larger facilities to accommodate growing volunteer programs and increased building capacity.',
  },
  {
    year: '2020',
    title: '100th Home Built',
    description: 'Reached the incredible milestone of 100 homes built, housing over 300 community members.',
  },
  {
    year: '2024',
    title: 'Current Day',
    description: 'Continuing our mission with 143 homes built and plans for 6-8 new homes annually.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header with Navigation */}
      <section className="bg-habitat-blue text-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn about our mission, vision, and the people who make our work possible
            </p>
          </div>
          
          {/* Sub-navigation */}
          <nav className="flex flex-wrap justify-center gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* About Habitat */}
      <section id="about-habitat" className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <Heart className="w-8 h-8 text-habitat-blue" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                About Habitat for Humanity of Rowan County
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Habitat for Humanity of Rowan County is a nonprofit, ecumenical Christian housing ministry that seeks to eliminate substandard housing and homelessness from our community and to make adequate, affordable shelter a matter of conscience and action. We build and renovate simple, decent, affordable houses in partnership with families in need.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Habitat houses are sold to partner families at no profit and are financed with affordable, no-interest loans. The homeowners' monthly mortgage payments go into a revolving fund that is used to build more houses. Partner families invest hundreds of hours of their own labor—"sweat equity"—working alongside volunteers on the construction of their homes and the homes of others.
              </p>

              <div className="bg-habitat-green/10 border-l-4 border-habitat-green p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">All are welcome</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Habitat for Humanity of Rowan County welcomes volunteers and supporters from all backgrounds. We do not proselytize, and we welcome volunteers and homeowners of all races, religions, and nationalities. Our ministry is based on the conviction that to follow the teachings of Jesus Christ, we must love and care for one another.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About Habitat for Humanity International</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Habitat for Humanity International is a nonprofit, ecumenical Christian housing ministry founded in 1976 by Millard and Linda Fuller. Habitat has built, renovated, and repaired more than 1 million homes worldwide, providing safe, decent, affordable shelter for more than 5 million people. Habitat for Humanity is the largest nonprofit builder in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              id="mission"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <Target className="w-8 h-8 text-habitat-blue" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "Seeking to put God's love into action, Habitat for Humanity brings people together to build homes, communities and hope."
              </blockquote>
            </motion.div>

            {/* Vision */}
            <motion.div
              id="vision"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <Eye className="w-8 h-8 text-habitat-green" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "A world where everyone has a decent place to live."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* President */}
      <section id="president" className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <User className="w-8 h-8 text-habitat-blue" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Our President
              </h2>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-gray-400" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    [President Name]
                  </h3>
                  <p className="text-lg text-habitat-blue font-medium mb-4">
                    President & CEO
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    [President's bio and message would go here. This section would contain the verbatim bio text provided by the organization, highlighting their leadership experience, vision for the organization, and commitment to the mission of building homes, communities, and hope.]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Users className="w-8 h-8 text-habitat-blue" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Our Staff
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated team members who make our mission possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                
                <p className="text-habitat-blue font-medium mb-2">
                  {member.role}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {member.contact}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Clock className="w-8 h-8 text-habitat-blue" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Our History
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nearly three decades of building homes, communities, and hope in Rowan County
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-habitat-blue"></div>
              
              {historyMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8 pb-12"
                >
                  {/* Timeline dot */}
                  <div className="w-16 h-16 bg-habitat-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}