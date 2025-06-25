import React from 'react';
import { ExternalLink, Award, Users, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Tech Conference Activation",
      category: "Brand Activation",
      description: "Interactive tech showcase that generated 300% increase in brand awareness for leading software company.",
      metrics: ["300% Brand Awareness", "5,000+ Participants", "95% Satisfaction Rate"],
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Retail Experience Campaign",
      category: "Retail Marketing",
      description: "Immersive in-store experience that drove 40% increase in sales during campaign period.",
      metrics: ["40% Sales Increase", "15,000+ Store Visits", "200% ROI"],
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Product Launch Event",
      category: "Event Marketing",
      description: "Comprehensive product launch strategy that achieved nationwide media coverage and customer engagement.",
      metrics: ["50+ Media Mentions", "100K+ Social Reach", "80% Target Achievement"],
      image: "https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Brand Storytelling Workshop",
      category: "Interactive Experience",
      description: "Educational workshop series that enhanced brand loyalty and customer understanding.",
      metrics: ["90% Completion Rate", "4.8/5 Rating", "2,000+ Participants"],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore some of our most successful campaigns and see how we've helped brands 
            achieve remarkable results through innovative experiential marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="space-y-3 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
                
                <button className="flex items-center space-x-2 text-blue-900 hover:text-green-600 font-semibold transition-colors">
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Highlights */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Years of experience delivering exceptional results across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-900 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Strategy & Execution</h4>
              <p className="text-gray-600">End-to-end campaign management with proven methodologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-900 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Audience Engagement</h4>
              <p className="text-gray-600">Deep understanding of audience behavior and preferences</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-900 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Measurable Results</h4>
              <p className="text-gray-600">ROI-focused approach with comprehensive analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;