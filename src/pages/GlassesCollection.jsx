import { Link } from 'react-router-dom';

const GlassesCollection = () => {
  const steps = [
    {
      title: 'Collection',
      description: 'Receiving glasses donations from different glasses shops or optometry clinics is a key component of our project to create real social change. We connect with local glasses shops, optometrist clinics, community centers, libraries, and schools to propose the setup of a donation box at that location. We plan to possibly expand the donation locations nationally to maximize the number of used glasses and ultimately help more people.',
      images: [
        '/Collection Process/20 20 Car.png',
        '/Collection Process/20 20 Collecting 2.png',
        '/Collection Process/IMG_1184.jpg',
        '/Collection Process/IMG_1219.jpg'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      )
    },
    {
      title: 'Cleaning',
      description: 'Every pair of donated glasses goes through a thorough cleaning and inspection process. We sanitize frames and lenses and ensure each pair is safe, comfortable, and ready for reuse. This step restores dignity and quality, so recipients receive eyewear they can trust and proudly wear.',
      images: [
        '/Cleaning Process/20 20 Cleaning.jpg',
        '/Cleaning Process/IMG_1207.jpg'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Prescription Measurement',
      description: 'Using professional optical tools and trained volunteers, we carefully measure the prescription of each pair of glasses. Accurate lens power, alignment, and fit are essential to effective vision correction. This process ensures that donated glasses are properly matched to individuals who need them most.',
      images: [
        '/Prescription Measurement/Guatemala April 2024 Day 4-17.jpg'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Donation',
      description: 'Once cleaned and measured, glasses are personally delivered to underserved communities through trusted partners and mobile medical clinics. We follow safety guidelines and ensure that all screening, eye examination, and dispensing fall under local safety guidelines. One pair of glasses can create a lasting impact and together, they change communities.',
      images: [
        '/Donation/Guatemala April 2024 Day 4-8.jpg'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-white mb-4">Glasses Collection Process</h1>
          <p className="textFrom donation to-xl text-gray-100 max-w-3xl mx-auto">
             Every step is carefully managed to ensure quality and impact
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-container">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              {/* Icon/Image Side */}
              <div className="w-full md:w-1/2 flex justify-center">
                {step.images ? (
                  <div className={`grid gap-4 w-full max-w-lg ${step.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    {step.images.map((img, i) => (
                      <div key={i} className="rounded-lg overflow-hidden shadow-md aspect-[4/3]">
                        <img 
                          src={img} 
                          alt={`${step.title} ${i + 1}`} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.style.display = 'none';
                            e.target.parentNode.className = 'bg-gray-200 flex items-center justify-center h-48'; // Fallback style
                            e.target.parentNode.innerHTML = '<span class="text-gray-400">Image not found</span>';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-primary to-accent text-white p-8 rounded-full">
                    {step.icon}
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-primary mr-4">{index + 1}</span>
                    <h2 className="text-primary">{step.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Donation Locations CTA */}
      <section className="bg-light py-16">
        <div className="section-container text-center">
          <h2 className="text-primary mb-6">Find a Donation Location</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Want to donate your old glasses? Find a convenient drop-off location near you.
          </p>
          <button className="btn-primary">
            View Donation Locations
          </button>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-primary to-accent text-white p-12 rounded-2xl text-center">
          <h2 className="text-white mb-6">The Impact of Your Donation</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Every pair of glasses you donate has the power to transform someone's life. From enabling children to read and learn, to helping adults work and provide for their families, your contribution makes a real difference.
          </p>
          <Link to="/get-involved" className="btn-primary">
            Get Involved Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlassesCollection;
