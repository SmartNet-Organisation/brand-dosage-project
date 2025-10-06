import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create Gmail compose URL with form data
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}

---
This message was sent from the BrandDosage website contact form.
    `);
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@branddosage.com&su=${subject}&body=${body}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneClick = () => {
    window.open('https://wa.me/2348089111646', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@branddosage.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your brand with unforgettable experiential marketing? 
            Let's discuss your vision and create campaigns that deliver real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 transition-all duration-800 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Start Your Campaign</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Thank You!</h4>
                <p className="text-gray-200">Your message has been prepared in Gmail. Complete sending it to reach us!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:bg-white/30 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:bg-white/30 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:bg-white/30 transition-all"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:bg-white/30 transition-all resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div 
            ref={infoRef}
            className={`space-y-8 transition-all duration-800 delay-200 ${
              infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email Us</h4>
                    <button 
                      onClick={handleEmailClick}
                      className="text-gray-200 hover:text-green-400 transition-colors cursor-pointer"
                    >
                      info@branddosage.com
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Chat with Us</h4>
                    <button 
                      onClick={handlePhoneClick}
                      className="text-gray-200 hover:text-green-400 transition-colors cursor-pointer"
                    >
                      08089111646
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Visit Us</h4>
                    <p className="text-gray-200">Plot 1, Rumuevolu Street</p>
                    <p className="text-gray-200">Off Adageorge Road, Miniorlu Mgbuoba</p>
                    <p className="text-gray-200">Port Harcourt, Rivers State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-200">Monday - Friday</p>
                    <p className="text-gray-200">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Partner With Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-200">Proven track record with 500+ successful campaigns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-200">Expert team with industry-leading expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-200">Measurable ROI and comprehensive analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-200">24/7 support and dedicated account management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;