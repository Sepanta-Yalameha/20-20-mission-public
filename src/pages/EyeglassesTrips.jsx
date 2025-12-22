const EyeglassesTrips = () => {
  const trips = [
    {
      location: 'Dominican Republic',
      date: 'November 2025',
      patients: '450+',
      glasses: '400+',
      partner: 'Rayjon Share Care',
      description: 'Our most recent mission trip brought critical eye care services to underserved communities in the Dominican Republic.',
      image: 'dominican-republic'
    },
    {
      location: 'Guatemala',
      date: 'April 2024',
      patients: '450+',
      glasses: '400+',
      partner: 'Rayjon Share Care',
      description: 'A successful partnership delivering comprehensive eye care and eyeglasses to communities across Guatemala.',
      image: 'guatemala'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-white mb-4">Eyeglasses Trips with Rayjon</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Bringing vision care directly to communities in need through international mission trips
          </p>
        </div>
      </section>

      {/* Mission Trips */}
      <section className="section-container">
        <div className="space-y-12">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Placeholder */}
                <div className={`h-80 bg-gradient-to-br ${
                  index % 2 === 0 ? 'from-primary to-accent' : 'from-accent to-primary'
                } flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-3xl font-bold">{trip.location}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-primary mb-4">{trip.location}</h2>
                  <p className="text-xl font-semibold text-gray-700 mb-4">{trip.date}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {trip.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-light p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-primary">{trip.patients}</div>
                      <div className="text-gray-600 font-medium">Patients Seen</div>
                    </div>
                    <div className="bg-light p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-primary">{trip.glasses}</div>
                      <div className="text-gray-600 font-medium">Glasses Dispensed</div>
                    </div>
                  </div>

                  {/* Partner Badge */}
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium">In Partnership with {trip.partner}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Futures in Focus Section */}
      <section className="bg-primary text-white py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">Futures in Focus Initiative</h2>
            <p className="text-xl text-gray-100 mb-8">
              Learn more about our broader vision and initiatives to improve eye care access globally.
            </p>
            <a
              href="https://www.futuresinfocus.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center"
            >
              Visit Futures in Focus
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Join a Trip CTA */}
      <section className="section-container">
        <div className="bg-light p-12 rounded-2xl text-center">
          <h2 className="text-primary mb-6">Join Our Next Mission Trip</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the life-changing impact of providing vision care firsthand. Join us on our next international mission trip.
          </p>
          <a href="/get-involved" className="btn-primary">
            Learn More About Volunteering
          </a>
        </div>
      </section>
    </div>
  );
};

export default EyeglassesTrips;
