import { useState } from 'react';


const OurTeam = () => {
  const [filter, setFilter] = useState('founders');


  const teamMembers = {
    founders: [
      {
        name: 'Kobe Li',
        role: 'Executive Director',
        email: 'kobeli@2020mission.ca',
        linkedin: 'https://www.linkedin.com/in/kobeli24',
        instagram: 'https://www.instagram.com/theblackmamba__24',
        bio: 'Leading the mission to bring accessible eye care to underserved communities worldwide.'
      },
      {
        name: 'Elva Ly',
        role: 'Board Member',
        email: 'elvaly@2020mission.ca',
        bio: 'Passionate about creating equitable access to healthcare and vision correction.'
      },
      {
        name: 'Jason Qin',
        role: 'Board Member',
        email: 'jasonqin@2020mission.ca',
        bio: 'Dedicated to advancing the mission of 20/20 Mission through strategic leadership.'
      }
    ],
    board: [
      {
        name: 'Elva Ly',
        role: 'Board Chair',
        email: 'elvaly@2020mission.ca',
        bio: 'Providing strategic direction and governance for 20/20 Mission.'
      },
      {
        name: 'Jason Qin',
        role: 'Board Member',
        email: 'jasonqin@2020mission.ca',
        bio: 'Contributing expertise in organizational development and community outreach.'
      },
      {
        name: 'Kareem Sadek',
        role: 'Board Member',
        bio: 'Bringing valuable insights in healthcare policy and community engagement.'
      },
      {
        name: 'Joshua Seto',
        role: 'Board Member',
        bio: 'Supporting mission initiatives through strategic planning and partnerships.'
      },
      {
        name: 'Dr. Christian Anderson',
        role: 'Board Member',
        bio: 'Providing medical expertise and guidance in vision care and eye health.'
      }
    ],
    coordinators: [
      {
        name: 'Jahau Yang',
        role: 'Eyeglasses Coordinator',
        email: 'jahau.yang@2020mission.ca',
        bio: 'Managing the collection, processing, and distribution of donated eyeglasses.'
      },
      {
        name: 'Esha Pattni',
        role: 'Rural and Indigenous Outreach Coordinator',
        email: 'esha.pattni@2020mission.ca',
        bio: 'Building connections with rural and Indigenous communities to ensure equitable access.'
      },
      {
        name: 'Sepanta Yalameha',
        role: 'Website and Database Coordinator',
        email: 'sepanta@2020mission.ca',
        bio: 'Managing digital infrastructure and data systems for 20/20 Mission.'
      }
    ]
  };


  const filterButtons = [
    { key: 'founders', label: 'Our Founders' },
    { key: 'board', label: 'Board of Directors' },
    { key: 'coordinators', label: 'Coordinators' }
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-white mb-4">Our Team</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Meet the passionate individuals driving our mission forward
          </p>
        </div>
      </section>


      {/* Filter Buttons */}
      <section className="section-container">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => setFilter(button.key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === button.key
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>


        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers[filter].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Placeholder Image with Gradient */}
              <div className="h-64 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                {/* Bio overlay on hover */}
                <div className="absolute inset-0 bg-primary bg-opacity-95 p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center">{member.bio}</p>
                </div>
              </div>


              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-primary transition-colors flex items-center mb-4"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {member.email}
                  </a>
                )}


                {/* Social Links */}
                {(member.linkedin || member.instagram) && (
                  <div className="flex space-x-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Join Us Section */}
      <section className="bg-light py-16">
        <div className="section-container text-center">
          <h2 className="text-primary mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to help us achieve our mission.
          </p>
          <a href="/get-involved" className="btn-primary">
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};


export default OurTeam;
