import { useState } from 'react';


const teamMembers = [
  { name: "Kobe Li", role: "Executive Director", email: "kobeli@2020mission.ca", bio: "Founder and Executive Director of 20/20 Mission.", category: "Founders" },
  { name: "Elva Ly", role: "Board Member", email: "elvaly@2020mission.ca", bio: "Co-founder and Board Member.", category: "Founders" },
  { name: "Jason Qin", role: "Board Member", email: "jasonqin@2020mission.ca", bio: "Co-founder and Board Member.", category: "Founders" },
  { name: "Elva Ly", role: "Board Chair", email: "elvaly@2020mission.ca", bio: "Chair of the Board of Directors.", category: "Board" },
  { name: "Jason Qin", role: "Board Member", email: "jasonqin@2020mission.ca", bio: "Board Member of 20/20 Mission.", category: "Board" },
  { name: "Kareem Sadek", role: "Board Member", email: "kareem.sadek@ucalgary.ca", bio: "Board Member of 20/20 Mission.", category: "Board" },
  { name: "Joshua Seto", role: "Board Member", email: "N/A", bio: "Board Member of 20/20 Mission.", category: "Board" },
  { name: "Dr. Christian Anderson", role: "Board Member", email: "N/A", bio: "Board Member of 20/20 Mission.", category: "Board" },
  { name: "Jahau Yang", role: "Eyeglasses Coordinator", email: "N/A", bio: "Manages glasses collection and distribution.", category: "Coordinators" },
  { name: "Esha Pattni", role: "Rural and Indigenous Outreach Coordinator", email: "N/A", bio: "Leads rural and Indigenous outreach programs.", category: "Coordinators" },
  { name: "Sepanta Yalameha", role: "Website & Database Coordinator", email: "N/A", bio: "Manages website and database operations.", category: "Coordinators" },
];


const AboutUs = () => {
  const [selectedCategory, setSelectedCategory] = useState("Founders");
  const filteredMembers = teamMembers.filter(member => member.category === selectedCategory);


  return (
    <div className="font-sans text-gray-800">


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-100">
            20/20 Mission is a BC registered non-profit organization dedicated to providing clear vision for underserved communities.
          </p>
        </div>
      </section>


      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl text-primary font-semibold mb-6">Our Vision</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            A world where every individual in underserved communities has clear vision and equitable access to necessary eye care and optical correction.
          </p>
        </div>
      </section>


      {/* Purpose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-primary font-semibold mb-10 text-center">Our Purpose</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PurposeCard
              title="Collect & Distribute"
              text="To collect, refurbish, and distribute eyeglasses to individuals and communities in need."
            />
            <PurposeCard
              title="Educate & Advocate"
              text="To advance education and awareness of vision care and global health challenges, inequities, and policies."
            />
            <PurposeCard
              title="Support Sustainability"
              text="To support sustainability by reusing eyewear and reducing waste."
            />
            <PurposeCard
              title="Empower Youth"
              text="To empower youth to take humanitarian action through leadership, volunteerism, and experiential learning opportunities."
            />
          </div>
        </div>
      </section>


      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-primary font-semibold mb-8">Our Team</h2>


          {/* Category Dropdown */}
          <div className="mb-8">
            <select
              className="border border-gray-300 rounded px-4 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="Founders">Founders</option>
              <option value="Board">Board of Directors</option>
              <option value="Coordinators">Coordinators</option>
            </select>
          </div>


          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredMembers.map((member, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition relative group cursor-pointer">
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-gray-700 mb-1">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.email}</p>


                {/* Hover bio */}
                <div className="absolute inset-0 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 rounded-lg transition-opacity text-center">
                  <p className="text-gray-800">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-4">Join Us in Our Mission</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Together, we can make a lasting impact on communities worldwide by providing access to clear vision.
          </p>
          <a href="/get-involved" className="btn-primary bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
            Get Involved Today
          </a>
        </div>
      </section>


    </div>
  );
};


// Purpose Card Component
const PurposeCard = ({ title, text }) => (
  <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-gray-700">{text}</p>
  </div>
);


export default AboutUs;


