import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mamara@uwaterloo.ca',
      link: 'mailto:mamara@uwaterloo.ca',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (519) 701-5844',
      link: 'tel:+15197015844',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Waterloo, ON, Canada',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: '@mohamed-amara',
      link: 'https://github.com/mohamed-amara',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'Mohamed Amara',
      link: 'https://www.linkedin.com/in/mohamed-amara-1b45752b4',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I'm actively seeking co-op opportunities in software development, embedded systems, 
            and robotics. Let's discuss how we can build impactful solutions together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <item.icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-slate-900 hover:text-blue-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-slate-900">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-slate-900 mb-4">Find Me Online</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="flex items-center p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                  >
                    <social.icon size={20} className="text-slate-600 group-hover:text-blue-600 mr-3" />
                    <div>
                      <div className="text-sm font-medium text-slate-900">{social.label}</div>
                      <div className="text-sm text-slate-600">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <h4 className="font-semibold text-green-800">Available for Co-op</h4>
              </div>
              <div className="space-y-2 text-sm text-green-700">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2" />
                  <span>Fall 2025: 4-month term</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2" />
                  <span>Fall 2025: 8-month term</span>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                  <Download size={14} className="mr-2" />
                  Resume
                </button>
                <button className="bg-white hover:bg-green-50 text-green-600 border border-green-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="coop">Co-op Opportunity</option>
                    <option value="project">Project Collaboration</option>
                    <option value="networking">Professional Networking</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Tell me about your opportunity or how we can collaborate..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 text-center">
                  I typically respond within 24 hours. For urgent matters, 
                  please feel free to call or connect on LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;