import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [brandsRef, brandsVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  const brands = [
    {
      name: "B-8",
      logo: "/b-8.png",
      alt: "B-8 Brand Logo"
    },
    {
      name: "FCMB",
      logo: "/fcmb.png",
      alt: "FCMB Bank Logo"
    },
    {
      name: "MTN",
      logo: "/mtn.png",
      alt: "MTN Telecommunications Logo"
    },
    {
      name: "Coca-Cola",
      logo: "/coke.png",
      alt: "Coca-Cola Brand Logo"
    },
    {
      name: "Campari",
      logo: "/campari.png",
      alt: "Campari Brand Logo"
    }
  ];

  const stats = [
    {
      number: "50+",
      label: "Trusted Brands",
      color: "text-green-600"
    },
    {
      number: "500+",
      label: "Campaigns Executed",
      color: "text-green-600"
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      color: "text-green-600"
    },
    {
      number: "10+",
      label: "Years Experience",
      color: "text-green-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Brands We Have Worked With
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to have partnered with leading brands across various industries, 
            creating impactful experiential marketing campaigns that drive results.
          </p>
        </div>

        {/* Brand Logos Section */}
        <div 
          ref={brandsRef}
          className={`mb-20 transition-all duration-800 ${
            brandsVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100 flex items-center justify-center min-h-[120px] ${
                  brandsVisible ? 'animate-slide-in-left' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.alt}
                  className="max-w-full max-h-16 object-contain filter hover:brightness-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`bg-gray-50 rounded-3xl p-8 md:p-12 transition-all duration-800 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-500 ${
                  statsVisible ? 'animate-slide-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;