import { Link } from 'react-router-dom';

const GetInvolved = () => {
  const positions = [
    'Grantwriting Coordinator',
    'Awareness Coordinator',
    'Marketing Coordinator',
    'Social Media Coordinator',
    'Events Coordinator',
    'Partnerships Coordinator'
  ];

  const volunteerBenefits = [
    {
      title: 'Direct Impact',
      description: 'See the immediate difference your work makes in people\'s lives',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Skill Development',
      description: 'Gain hands-on experience in healthcare, community service, and leadership',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Community Connection',
      description: 'Join a passionate team dedicated to making a global impact',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Meaningful Work',
      description: 'Help clean, measure, and organize glasses that will change lives',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-white mb-4">Get Involved</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Join us in bringing clear vision to communities around the world
          </p>
        </div>
      </section>

      {/* Leadership Positions */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-primary mb-4">Leadership Positions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            We are not hiring for specific coordinator positions at the moment.
          </p>
          <p className="text-lg text-gray-700">
            For partnerships and collaboration, please contact <a href="mailto:kobeli@2020mission.ca" className="text-primary font-semibold hover:underline">kobeli@2020mission.ca</a>.
          </p>
        </div>
      </section>

      {/* School Chapter Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary to-accent text-white p-12 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Start a School-Based Chapter</h2>
            <p className="text-xl text-gray-100 mb-8">
              Empower students in your school to make a difference. Start a 20/20 Mission chapter and lead local initiatives to collect glasses, raise awareness, and support our mission.
            </p>
            <Link to="/contact" className="inline-block btn-primary bg-white text-primary hover:bg-gray-100">
              Contact Us to Start a Chapter
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="bg-light py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-4">Become a Volunteer</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a 20/20 Mission volunteer, you see the direct impact of your work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {volunteerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://forms.gle/vXRQDZ3gTpGTg2Tv6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block btn-primary"
            >
              Apply to Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Donate Glasses Section */}
      <section className="section-container">
        <div className="bg-white p-12 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-primary mb-6">Donate Your Glasses</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have old glasses you no longer need? Drop them off at one of our collection locations. Your donated eyewear will help someone in need see clearly.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=12PylVLPwe9k_i8yqghQLLlyTDBaGRg4&ehbc=2E312F"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="20/20 Mission Glasses Collection Locations"
            ></iframe>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Click on any marker to see location details and hours
          </p>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="bg-gradient-to-br from-gray-50 to-light py-16">
        <div className="section-container text-center">
          <h2 className="text-primary mb-6">Every Contribution Matters</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Whether you volunteer your time, donate eyeglasses, or provide financial support, your contribution helps bring clear vision and improved quality of life to people in underserved communities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
