import React, { useEffect, useRef } from 'react'
import { Layout } from '../layout/Layout';
import { Link } from 'react-router-dom';
export  function About() {
  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.current.forEach(section => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div 
        ref={el => sections.current[0] = el}
        className="relative py-20 px-6 bg-indigo-900 text-white opacity-0 translate-y-8 transition-all duration-500"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Crafting Unforgettable Journeys
          </h1>
          <p className="text-xl text-indigo-100 mb-8">
            Transforming travel dreams into reality since 2010
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div 
          ref={el => sections.current[1] = el}
          className="prose prose-lg text-gray-600 mb-16 opacity-0 translate-y-8 transition-all duration-500 delay-100"
        >
          <p className="text-xl">
            Travelling is one of the few things in life that provides true happiness to a person. Sai Tours is one of the premium tour and travel companies located in Karwar Karnataka well-known for offering host of travel services with the view of providing the clients with the most enthralling and fulfilling travelling experience.
          </p>
          <p className="text-xl">
            Different types of services offered by us include Airline Ticketing Service, Hotel Booking Service, Car Rental Service, Event Organizing Service and Travel Insurance Service. We are also one of the reputed Tour Operators operating in the region offering attractive tours such as Domestic Tour, International Tour, Adventure Tour and Beach Island Tour.
          </p>
          <p className="text-xl">
            Operating in the tourism industry since 2010, over the years we have helped many of the clients in making their travelling dreams come true. Under the guidance and supervision of our owner, Gurudas Revankar we follow a strict client centric approach to ensure full client satisfaction. Keeping in mind the various expectations of the clients, we are offering services that are specially tailored according to their need and requirement.
          </p>
          <p className="text-xl">
            As a leading service provider, we are also involved in the process of offering MICE Services and Group Tours for the corporate sector. Keeping in mind the comfort and the convenience of the clients, we have employed a team of highly efficient and dynamic professionals. Our professionals are known for their friendly approach, commitment towards the client and an undying spirit to provide world-class services according to the need and requirement of the clients. Being a reliable company we offer the clients with the most transparent deals and follow ethical business practice.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          ref={el => sections.current[2] = el}
          className="grid md:grid-cols-2 gap-8 mb-16 opacity-0 translate-y-8 transition-all duration-500 delay-200"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-50">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Our Leadership</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">CEO:</span> Mr. Gurudas Revankar
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Founded:</span> 2010
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-50">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Our Commitment</h3>
            <p className="text-gray-600">
              Client-centric approach with 100% transparent deals and ethical business practices
            </p>
          </div>
        </div>

        {/* Services Section */}
       
        <h2 
  className="text-3xl font-bold text-gray-800 mb-8  translate-y-8 transition-all duration-500 delay-300"
>
  Our Services
</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-1 " >
  {[
    {
      title: "Airline Ticketing",
      icon: "✈️",
      desc: "Expert booking services for domestic & international flights with best fares",
      link: "/airline-ticketing",
    },
    {
      title: "Hotel Booking",
      icon: "🏨",
      desc: "Curated selection of premium accommodations to match your preferences",
      link: "/hotel-booking",
    },
    {
      title: "Car Rental",
      icon: "🚗",
      desc: "Luxury and economy vehicles with chauffeur options available",
      link: "/car-rental",
    },
    {
      title: "Travel Insurance",
      icon: "🛡️",
      desc: "Comprehensive coverage plans for worry-free travels",
      link: "/travel-insurance",
    },
    {
      title: "Tour Packages",
      icon: "🌴",
      desc: "Customized domestic, international, adventure & beach island tours",
      link: "/tour-packages",
    },
    {
      title: "Cruise Booking",
      icon: "🚢",
      desc: "End-to-end corporate event management & group travel solutions",
      link: "/cruise-booking",
    }
  ].map((service, index) => (
    <Link
      to={service.link}
      key={index}
      className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-indigo-100 block"
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold text-indigo-600 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm">
        {service.desc}
      </p>
    </Link>
  ))}
</div>
        

        {/* CTA Section */}
        <div className="text-center py-12">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>
    </div></Layout>
  );
}
