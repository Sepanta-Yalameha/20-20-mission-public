import { useState } from 'react';

const Contact = () => {
  const [newsletterForm, setNewsletterForm] = useState({ name: '', email: '' });
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setContactError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (response.ok) {
        setContactSubmitted(true);
        setContactForm({ name: '', email: '', message: '' });
        setTimeout(() => {
          setContactSubmitted(false);
        }, 5000);
      } else {
        setContactError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setContactError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', newsletterForm);
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterForm({ name: '', email: '' });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Get in touch with us - we'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16 relative z-10">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:info@2020mission.ca" className="text-primary hover:text-secondary transition-colors">
              info@2020mission.ca
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">British Columbia, Canada</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/theblackmamba__24" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kobeli24" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
       
      {/* Newsletter Signup */}
      {/* <section className="bg-light py-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-primary mb-4">Sign Up for Our Newsletter</h2>
              <p className="text-gray-600">
                Stay updated on our latest initiatives, mission trips, and ways to get involved
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="space-y-6">
              <div>
                <label htmlFor="newsletter-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="newsletter-name"
                  required
                  value={newsletterForm.name}
                  onChange={(e) => setNewsletterForm({ ...newsletterForm, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  required
                  value={newsletterForm.email}
                  onChange={(e) => setNewsletterForm({ ...newsletterForm, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
                disabled={newsletterSubmitted}
              >
                {newsletterSubmitted ? 'Thank you for subscribing! ✓' : 'Subscribe to Newsletter'}
              </button>
            </form>
          </div>
        </div>
      </section>  */}
      

      {/* Contact Form */}
      <section id="message" className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-primary mb-4">Send Us a Message</h1>
            <p className="text-xl text-gray-600">
              Have a question or want to learn more? We'd love to hear from you
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows="6"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>

            {contactError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {contactError}
              </div>
            )}

            <button
              type="submit"
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={contactSubmitted || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : contactSubmitted ? 'Message sent! We\'ll be in touch soon ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Map or Additional Info */}
      <section className="bg-primary text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-white mb-6">We're Here to Help</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Whether you're interested in volunteering, starting a chapter, donating glasses, or partnering with us, we're excited to connect with you and explore how we can work together to bring clear vision to those in need.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
