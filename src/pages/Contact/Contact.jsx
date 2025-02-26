import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Layout } from '../layout/Layout';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xmn308n",
        "template_1h9utxv",
        form.current,
        "Jg0jbHfvWnCunrIlu"
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 relative">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center animate-fade-in-down">
              Connect with Us
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Business Details Card */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-indigo-100 transition-all duration-300">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                    Sai Tours
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <span className="text-2xl">👤</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Contact Person</p>
                        <p className="text-gray-600">Mr. Gurudas revankar </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Head Office</p>
                        <p className="text-gray-600">Sai Tours, 29/79A keshav shet road sonarwada baad Karwar 581306</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Direct Line</p>
                        <a href="tel:+91-9890818553" className="text-indigo-600 hover:text-indigo-800 transition">
                          +91-8431114777
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <a href="mailto:sixthsense.holidays@gmail.com" className="text-indigo-600 hover:text-indigo-800 transition">
                        infosaitours1@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Card */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-indigo-100 transition-all duration-300">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
            <input 
              type="text" 
              name="from_name"
              className="w-full px-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input 
                type="email" 
                name="from_email"
                className="w-full px-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
              <input 
                type="tel" 
                name="phone_number"
                className="w-full px-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                placeholder="+91 00000 00000"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <textarea 
              name="message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02]"
          >
            Send Message ➔
          </button>
        </form>
      </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="max-w-6xl mx-auto px-4">
            <h2 
              className="text-3xl font-bold text-gray-800 mb-10 translate-y-8 transition-all duration-500 delay-300"
            >
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: 'Airline Ticketing',
                  icon: '✈️',
                  desc: 'Expert booking services for domestic & international flights with best fares'
                },
                {
                  title: 'Hotel Booking',
                  icon: '🏨',
                  desc: 'Curated selection of premium accommodations to match your preferences'
                },
                {
                  title: 'Car Rental',
                  icon: '🚗',
                  desc: 'Luxury and economy vehicles with chauffeur options available'
                },
                {
                  title: 'Travel Insurance',
                  icon: '🛡️',
                  desc: 'Comprehensive coverage plans for worry-free travels'
                },
                {
                  title: 'Tour Packages',
                  icon: '🌴',
                  desc: 'Customized domestic, international, adventure & beach island tours'
                },
                {
                  title: 'MICE Services',
                  icon: '🤝',
                  desc: 'End-to-end corporate event management & group travel solutions'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-indigo-100"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}