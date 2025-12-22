const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            20/20 Mission is a BC registered non-profit organization
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-primary mb-6 text-center">Vision</h1>
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              A world where every individual in underserved communities has clear vision and equitable access to necessary eye care and optical correction.
            </p>
          </div>

          {/* Purpose Section */}
          <div>
            <h1 className="text-primary mb-8 text-center">Purpose</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-light p-8 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Collect & Distribute</h3>
                    <p className="text-gray-600">
                      To collect, refurbish, and distribute eyeglasses to individuals and communities in need.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-8 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Educate & Advocate</h3>
                    <p className="text-gray-600">
                      To advance education and awareness of vision care and global health challenges, inequities, and policies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-8 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Support Sustainability</h3>
                    <p className="text-gray-600">
                      To support sustainability by reusing eyewear and reducing waste.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-8 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Empower Youth</h3>
                    <p className="text-gray-600">
                      To empower youth to take humanitarian action through leadership, volunteerism, and experiential learning opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-white mb-4">Join Us in Our Mission</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Together, we can make a lasting impact on communities worldwide by providing access to clear vision.
          </p>
          <a href="/get-involved" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Get Involved Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
