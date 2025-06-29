import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BrandDosage Ltd is a premier experiential marketing agency dedicated to 
            helping businesses boost their brand awareness, drive sales, and build lasting 
            customer loyalty through innovative marketing and advertising strategies.
          </p>
        </div>

        {/* Main Content Section - Text Left, Image Right Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative">
          {/* Left Content */}
          <div 
            ref={contentRef}
            className={`flex-1 space-y-8 order-2 lg:order-1 transition-all duration-800 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
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
          <div 
            ref={imageRef}
            className={`flex-1 relative order-1 lg:order-2 w-full transition-all duration-800 delay-400 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              <img 
                src="/3f6d951e-c32e-4da1-888c-7f185e3a1caa copy copy.jpeg" 
                alt="BrandDosage experiential marketing team in action"
                className="w-full h-[400px] md:h-[500px] object-cover object-center rounded-xl shadow-2xl"
              />
              
              {/* Floating Experience Card - Positioned lower within image area */}
              <div className="absolute bottom-4 right-3 sm:bottom-6 sm:right-4 lg:-bottom-4 lg:-left-12 xl:-bottom-5 xl:-left-14 bg-white rounded-xl p-3 sm:p-4 lg:p-3 shadow-2xl z-20 w-24 sm:w-28 lg:w-24 xl:w-28 transform transition-all duration-500 delay-600 hover:scale-105">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-lg xl:text-xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-1 tracking-tight">
                    10+
                  </div>
                  <div className="text-gray-700 text-[10px] sm:text-xs lg:text-[10px] xl:text-xs font-bold uppercase tracking-wider leading-tight">
                    Years<br />Experience
                  </div>
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