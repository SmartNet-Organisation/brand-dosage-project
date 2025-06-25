import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BrandDosage Ltd is a premier experiential marketing agency dedicated to 
            helping businesses boost their brand awareness, drive sales, and build lasting 
            customer loyalty through innovative marketing and advertising strategies.
          </p>
        </div>

        {/* Main Content Section - Matching First Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Crafting Experiences That Matter
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Our team of experts specializes in crafting innovative campaigns that bring 
                brands to life through events, activations, and interactive experiences. We 
                believe in the power of experiential marketing to create emotional connections 
                that drive business results.
              </p>
              
              <p className="text-lg">
                From concept to execution, we work closely with our clients to develop 
                tailored strategies that resonate with their target audience and achieve their 
                marketing objectives.
              </p>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              Learn More About Us
            </button>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/3f6d951e-c32e-4da1-888c-7f185e3a1caa copy.jpeg" 
                alt="BrandDosage experiential marketing team in action"
                className="w-full h-[500px] object-cover object-center"
              />
              
              {/* Overlay Stats Card - Positioned at bottom-right with green theme */}
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-2xl z-30 border-2 border-white/20 backdrop-blur-sm min-w-[140px]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10+</div>
                  <div className="text-green-100 text-sm font-semibold">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;