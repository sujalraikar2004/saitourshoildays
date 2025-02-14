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
                    Sixth Sense Holidays
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <span className="text-2xl">👤</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Contact Person</p>
                        <p className="text-gray-600">Mr. Nilesh Pawaskar</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Head Office</p>
                        <p className="text-gray-600">Office No 159, Shoppers Orbit Mall, Pune</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Direct Line</p>
                        <a href="tel:+91-9890818553" className="text-indigo-600 hover:text-indigo-800 transition">
                          +91-9890818553
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
                          sixthsense.holidays@gmail.com
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

          
        </div>
      </div>
    </Layout>
  )
}