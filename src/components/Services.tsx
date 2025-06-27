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
      icon: Calendar,
      title: "Event Conceptualization and Planning",
      description: "Comprehensive event planning from concept to execution, ensuring every detail aligns with your brand vision."
    },
    {
      icon: Zap,
      title: "Brand Activations and Installations",
      description: "Eye-catching brand activations that create buzz and generate meaningful interactions with your audience."
    },
    {
      icon: Users,
      title: "Interactive Experiences and Workshops",
      description: "Engaging workshops and interactive experiences that educate and inspire your target audience."
    },
    {
      icon: Store,
      title: "In-Store Promotions and Retail Marketing",
      description: "Strategic retail marketing solutions that drive foot traffic and increase sales conversions."
    },
    {
      icon: Target,
      title: "Experiential Campaign Strategy and Execution",
      description: "End-to-end campaign management from strategic planning to flawless execution and analysis."
    },
    {
      icon: Megaphone,
      title: "Event Marketing and Promotion",
      description: "Comprehensive marketing strategies to maximize event attendance and brand exposure."
    },
    {
      icon: PenTool,
      title: "Brand Storytelling and Content Creation",
      description: "Compelling brand narratives and content that resonate with your audience and drive engagement."
    },
    {
      icon: TrendingUp,
      title: "Sales Driven Initiatives",
      description: "Results-focused campaigns designed to generate measurable sales growth and ROI."
    },
    {
      icon: Users,
      title: "Audience Engagement Strategies",
      description: "Proven strategies to build deeper connections and increase customer loyalty and advocacy."
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
              className={`group bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 p-8 rounded-2xl transition-all duration-500 hover:shadow-xl border border-gray-100 hover:border-green-200 ${
                servicesVisible ? 'animate-slide-in-right' : ''
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="bg-gradient-to-br from-blue-900 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
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