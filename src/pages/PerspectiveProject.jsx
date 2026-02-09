const PerspectiveProject = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-white mb-4">The Perspective Project</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Bridging the "Vision Gap" through experiential education
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Coming Soon Banner */}
          <div className="bg-light border-l-4 border-primary p-6 rounded-r-lg shadow-sm">
            <h3 className="text-primary font-bold text-2xl mb-0 text-center">
              Coming to a classroom near you!
            </h3>
          </div>

          <div>
            <h2 className="text-primary mb-4">About The Project</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Perspective Project is a youth-led advocacy initiative designed to bridge the "Vision Gap" through experiential education. By mobilizing volunteers to lead immersive simulation workshops in schools, the project aims to foster deep empathy for those living with visual impairments all over Canada and the world, while inspiring the next generation to advocate for global health equity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This initiative mobilizes our current volunteer base to deliver immersive, hands-on workshops to elementary and middle school students. Using specialized vision simulation goggles, we allow students to "see through the eyes" of those living with untreated conditions like high myopia, cataracts, and glaucoma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-primary mb-3">Our Impact Goal</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>150-300 Students</strong> receiving hands-on empathy training</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>15-20 Schools</strong> introduced to the 20/20 Mission framework</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>300-1000 Families</strong> reached via Advocacy Booklets</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-primary mb-3">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Vancouver (In-person)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Duration</p>
                  <p className="text-gray-600">January - March 2026</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Format</p>
                  <p className="text-gray-600">Immersive Workshops & Advocacy Booklets</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PerspectiveProject;
