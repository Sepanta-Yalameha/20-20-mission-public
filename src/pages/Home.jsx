import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-24 md:py-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Clear Vision for Everyon
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Bringing 20/20 vision to underserved communities worldwide through accessible eye care and eyewear donations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#donate" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Make a Donation
              </a>
              <Link to="/get-involved" className="btn-secondary border-white text-black hover:bg-white hover:text-primary">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-light">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">800+</div>
              <div className="text-gray-600 font-medium">Glasses Distributed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">900+</div>
              <div className="text-gray-600 font-medium">Patients Seen</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years of Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-primary mb-6">Our Mission</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            20/20 Mission originates from our hope that everyone is able to afford glasses and achieve 20/20 vision without financial or social implications. We tackle the inaccessibility and unaffordability of eyewear for individuals with visual impairments in low-income households locally and globally.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are constantly striving to achieve inclusivity and improve the quality of life for those in need. Providing proper vision correction is one of the crucial steps in doing so, and we hope this project creates a lasting impact for 10+ years from now.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h1 className="text-center text-primary mb-12">Our Programs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Glasses Collection */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-primary mb-4">Glasses Collection Process</h2>
                <p className="text-gray-600 mb-6">
                  We collect, clean, measure, and distribute donated eyeglasses to those who need them most. Every pair goes through rigorous quality checks to ensure safety and effectiveness.
                </p>
                <Link to="/glasses-collection" className="text-primary font-semibold hover:text-secondary transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* International Trips */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-primary mb-4">International Mission Trips</h2>
                <p className="text-gray-600 mb-6">
                  In partnership with Rayjon Share Care, we've delivered eyeglasses to communities in the Dominican Republic and Guatemala, seeing over 900 patients and distributing 800+ pairs of glasses.
                </p>
                <Link to="/eyeglasses-trips" className="text-primary font-semibold hover:text-secondary transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-white mb-6">Make a Difference Today</h1>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Whether through volunteering, donating eyeglasses, or financial support, your contribution helps us bring clear vision to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="btn-secondary border-white text-black hover:bg-white hover:text-primary">
              Volunteer With Us
            </Link>
            <a href="#donate" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Donate Now
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-container">
        <h1 className="text-center text-primary mb-12">Our Partners</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-primary mb-4">Rayjon Share Care</h2>
            <p className="text-gray-600 mb-6">
              Our trusted partner in delivering eyecare to underserved communities in the Dominican Republic and Guatemala.
            </p>
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://www.futuresinfocus.ca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary transition-colors duration-300"
            >
              Visit Futures in Focus Initiative →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
