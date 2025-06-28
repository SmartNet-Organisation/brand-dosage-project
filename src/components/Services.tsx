import React from 'react';
import { 
  Target, 
  Users, 
  Lightbulb, 
  TrendingUp,
  Calendar, 
  Zap, 
  Store, 
  Megaphone, 
  PenTool
} from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();

  // Feature cards matching the second reference image design
  const features = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We develop targeted strategies that align with your brand objectives and audience needs.",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: Users,
      title: "Audience Engagement",
      description: "Creating meaningful connections between your brand and customers through immersive experiences.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Innovative concepts and cutting-edge execution that make your brand stand out.",
      gradient: "from-teal-400 to-green-500"
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Data-driven campaigns that deliver tangible ROI and business growth.",
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  const services = [
    {
      image: "/78af07a8-3555-49f0-8ddd-15d803251e08.jpeg",
      title: "Brand Activations and Experiential Events",
      description: "Creating memorable brand experiences like our Coca-Cola activation campaigns that drive direct consumer engagement and brand loyalty."
    },
    {
      image: "/dee9dd2b-2f89-474a-9265-f617df13a64f.jpeg",
      title: "Community Outreach and Grassroots Marketing",
      description: "Connecting brands with local communities through targeted grassroots campaigns and community engagement initiatives."
    },
    {
      image: "/a11e27ce-ec9c-45de-860c-109ab3a0c141.jpeg",
      title: "Event Staffing and Brand Ambassador Programs",
      description: "Professional brand ambassadors and event staff who represent your brand with excellence and drive meaningful customer interactions."
    },
    {
      image: "/a143044e-a581-426c-97be-2421c672795b.jpeg",
      title: "In-Store Promotions and Retail Marketing",
      description: "Strategic retail marketing solutions including product sampling, demonstrations, and promotional campaigns that drive sales conversions."
    },
    {
      image: "/b00d5a82-5ef7-49f7-9cd3-5555299df017.jpeg",
      title: "Product Sampling and Consumer Engagement",
      description: "Direct-to-consumer product sampling campaigns that create authentic brand experiences and drive trial and purchase intent."
    },
    {
      image: "/a8827413-8dfc-413d-90fe-01d308417bac.jpeg",
      title: "Premium Brand Installations and Displays",
      description: "High-end brand installations and interactive displays like our Blue Nun activation that create immersive brand experiences and drive engagement."
    },
    {
      image: "/e7f76bf2-a72c-4b2b-bafb-2231e55cdecc.jpeg",
      title: "Retail Point-of-Sale Marketing",
      description: "Strategic point-of-sale marketing campaigns and retail promotions that maximize brand visibility and drive immediate purchase decisions."
    },
    {
      image: "/1107dd6b-bcf0-4c83-a1eb-8abcaa0bc918.jpeg",
      title: "Mobile Marketing and Roadshow Campaigns",
      description: "Mobile marketing solutions and roadshow campaigns that bring your brand directly to your target audience across multiple locations."
    },
    {
      image: "/a143044e-a581-426c-97be-2421c672795b.jpeg",
      title: "Consumer Research and Market Insights",
      description: "In-depth consumer research and market analysis to inform strategy and optimize campaign effectiveness for better results."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Cards Section */}
        <div 
          ref={featuresRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-800 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-100 ${
                featuresVisible ? 'animate-slide-in-left' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As an experiential advertising marketing agency, we offer a comprehensive 
            range of services designed to elevate your brand and create meaningful 
            connections with your audience.
          </p>
        </div>

        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-800 ${
            servicesVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 rounded-2xl transition-all duration-500 hover:shadow-xl border border-gray-100 hover:border-green-200 overflow-hidden ${
                servicesVisible ? 'animate-slide-in-right' : ''
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-900 to-green-600 hover:from-blue-800 hover:to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;