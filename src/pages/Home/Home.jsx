import React from 'react';
import { useState, useRef ,useEffect} from "react";
import { motion, useScroll } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from '../layout/Layout';
import { sampleTours } from "../../utils/tourPackeges";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import { StarIcon, MapPinIcon, CalendarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import styled from 'styled-components';
import "./Home.css"

const Hero = styled.div`
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero-bg.jpg');
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background-size: cover;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 0;
`;

const DestinationCard = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const PackageFilters = () => (
  <div className="flex gap-4 mb-8 justify-center flex-wrap">
    <button className="filter-btn active">All</button>
    <button className="filter-btn">Adventure</button>
    <button className="filter-btn">Beach</button>
    <button className="filter-btn">Cultural</button>
    <button className="filter-btn">Honeymoon</button>
  </div>
);

export const Home = () => {
  const services = [
    {
      title: 'Luxury Car Rentals',
      image: '/Adobe Express - file(1).jpg',
      desc: 'Premium vehicles with chauffeur services',
      link: '/car-rental'
    },
    {
      title: 'Hotel Bookings', 
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
      desc: '5-star accommodations worldwide',
      link: '/hotel-booking'
    },
    {
      title: 'Air Ticketing',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd',
      desc: 'First-class flight arrangements',
      link: '/airline-ticketing'
    },
    {
      title: 'Tour Packages',
      image: '/Adobe Express - file(12).jpg',
      desc: 'Customized travel itineraries',
      link: '/tour-packages'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Luxury Travel Blogger',
      text: 'The most seamless booking experience I\'ve ever had. Our villa was even better than the photos!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Luxury Travel Blogger',
      text: 'The most seamless booking experience I\'ve ever had. Our villa was even better than the photos!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Luxury Travel Blogger',
      text: 'The most seamless booking experience I\'ve ever had. Our villa was even better than the photos!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Luxury Travel Blogger',
      text: 'The most seamless booking experience I\'ve ever had. Our villa was even better than the photos!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Adventure Photographer',
      text: 'Unforgettable experiences curated perfectly by the tourism team. 10/10 would recommend!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      rating: 5
    }
  ];
  const firstThreeTours = sampleTours.slice(0, 4);

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const cards = scrollRef.current.children;
        let centerIndex = 0;
        let minDiff = Infinity;

        for (let i = 0; i < cards.length; i++) {
          const rect = cards[i].getBoundingClientRect();
          const centerDiff = Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2);
          if (centerDiff < minDiff) {
            minDiff = centerDiff;
            centerIndex = i;
          }
        }
        setActiveIndex(centerIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    scrollContainer?.addEventListener("scroll", handleScroll);
    
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll left & right
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <Layout>
      {/* Restored Hero Slider Section */}
      <section className="relative min-h-[54vh] md:h-[700px]  group">
        <Swiper
          loop={true}
          speed={800}
          effect={'creative'}
          grabCursor={true}
          creativeEffect={{
            prev: { shadow: true, translate: ['-120%', 0, -500], rotate: [0, 0, -15] },
            next: { shadow: true, translate: ['120%', 0, -500], rotate: [0, 0, 15] }
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectCreative, Autoplay]}
          className="h-full w-full"
        >
          {[
            '/shifaaz-shamoon-qtbV_8P_Ksk-unsplash.jpg',
            '/samuel-scrimshaw-x8zEeH7euQI-unsplash.jpg',
            '/Adobe Express - file(12).jpg',
           
          ].map((img, index) => (
            <SwiperSlide key={index}>
            <div className="relative min-h-[54vh] md:h-full w-full overflow-hidden">
              <img
                src={img}
                loading="lazy"
                alt={`Slide ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-75 transform-gpu scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent flex items-end pb-12 md:pb-24">
                <div className="max-w-4xl mx-auto text-center px-4 space-y-4 md:space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-8 animate-float">
                    Explore Incredible India
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 animate-float delay-100">
                    {['Beach Paradises','Mountain Treks', 'Cultural Heritage', ][index]}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          
          
          ))}
        </Swiper>
      </section>

      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2 text-teal-800">
            Featured Tour Packages
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Curated experiences for every traveler
          </p>
          
          <PackageFilters />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {firstThreeTours.map((pkg) => (
              <div 
                key={pkg.package_id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                    ★ {pkg.rating}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{pkg.name}</h3>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-teal-600 font-medium">{pkg.duration}</span>
                    
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {pkg.destination.map((highlight) => (
                      <div key={highlight} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <Link to={`/detail/${pkg.package_id}`}>
  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition-colors duration-200">
    View Package Details
  </button>
</Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="group relative block h-52 md:h-96 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-teal-100 to-coral-100">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          What Our Travelers Say
        </h2>

        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 shadow-md rounded-full hidden sm:flex"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Horizontal scrolling container */}
        <div
          ref={scrollRef}
          className="relative flex gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth snap-x snap-mandatory"
          onWheel={(e) => {
            e.preventDefault();
            scrollRef.current.scrollBy({ left: e.deltaY * 2, behavior: "smooth" });
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`flex-shrink-0 transition-transform duration-300 rounded-2xl p-6 shadow-md snap-center
                w-[85%] sm:w-[40%] md:w-[30%] lg:w-[25%]
                ${
                  activeIndex === index
                    ? "scale-110 shadow-2xl bg-white z-10"
                    : "scale-90 bg-gray-100"
                }`}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="mt-4 flex gap-1 text-teal-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="w-5 h-5">⭐</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 shadow-md rounded-full hidden sm:flex"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
    </Layout>
  );
};