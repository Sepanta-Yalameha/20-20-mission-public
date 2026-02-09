import { Link } from 'react-router-dom';
import NewsCarousel from '../components/NewsCarousel';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 section-container w-full">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h2 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 drop-shadow-lg">
              20/20 Vision Starts With The 20/20 Mission
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://buy.stripe.com/bJe7sF5CT1uX8xL9QHeZ201" target="_blank" rel="noopener noreferrer" className="btn-primary transform hover:scale-105 transition-transform">
                Make a Donation
              </a>
              <Link to="/get-involved" className="btn-secondary transform hover:scale-105 transition-transform">
                Get Involved
              </Link>
            </div>
          </div>
        </div>

        {/* Photo Credit */}
        <div className="absolute bottom-4 right-4 z-10">
          <span className="text-white/70 text-xs bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
            Guatemala 2024
          </span>
        </div>
      </section>

      {/* News Carousel */}
      <NewsCarousel />

      {/* Impact Stats */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              
              <div className="pt-4 md:pt-0">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 mb-2">8000+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base tracking-wide uppercase">Pairs of Eyeglasses Collected</div>
              </div>

              <div className="pt-8 md:pt-0">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-500 mb-2">900+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base tracking-wide uppercase">Patients Directly Served</div>
              </div>

              <div className="pt-8 md:pt-0">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-2">40+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base tracking-wide uppercase">Volunteers</div>
              </div>

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
          <h1 className="text-center text-primary mb-12">Our Initiatives</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Glasses Collection */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-primary mb-4">Glasses Collection</h2>
                <p className="text-gray-600 mb-6">
                  We collect and clean used eyeglasses to give them a second life. Our process involves gathering donations, thoroughly cleaning and sanitizing frames and lenses, and preparing them for distribution to those in need.
                </p>
                <Link to="/glasses-collection" className="text-primary font-semibold hover:text-secondary transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Learn More →
                </Link>
              </div>
            </div>

            {/* International Trips */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-primary mb-4">International Eyeglasses Trips</h2>
                <p className="text-gray-600 mb-6">
                  We donate the collected eyeglasses on mission trips to underserved communities. We partner with local organizations to provide eye exams and distribute glasses to improving vision and quality of life globally.
                </p>
                <Link to="/eyeglasses-trips" className="text-primary font-semibold hover:text-secondary transition-colors" onClick={() => window.scrollTo(0, 0)}>
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

      {/* Supported By Section */}
      <section className="bg-white py-16">
        <div className="section-container">
          <h1 className="text-center text-primary mb-12">Supported By</h1>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img 
              src="/Logos/Glocal.png" 
              alt="Glocal" 
              className="h-24 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/Logos/Ingenious+.png" 
              alt="Ingenious+" 
              className="h-24 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/Logos/Rayjon Share Care.png" 
              alt="Rayjon Share Care" 
              className="h-24 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/Logos/Terry Fox Humanitarian Award Logo.png" 
              alt="Terry Fox Humanitarian Award" 
              className="h-24 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/Logos/Youth Impact Challenge.png" 
              alt="Youth Impact Challenge" 
              className="h-24 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
