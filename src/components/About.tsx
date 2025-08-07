import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Sentrix Labs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of aerospace and defense technology with indigenous innovation, 
            cutting-edge research, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Leading Indigenous Aerospace Innovation
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to revolutionize aerospace and defense capabilities, Sentrix Labs 
              stands at the forefront of indigenous technology development. We specialize in creating 
              next-generation avionics systems, advanced defense solutions, and cutting-edge autonomous 
              drone platforms.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our multidisciplinary team combines decades of aerospace expertise with innovative 
              engineering approaches, ensuring every solution meets the highest standards of reliability, 
              performance, and security. We're not just building technology—we're shaping the future 
              of national defense and aerospace capabilities.
            </p>
            
            {/* Key Differentiators */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">100% Indigenous Development</h4>
                  <p className="text-gray-600 text-sm">Complete in-house R&D and manufacturing capabilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600 text-sm">World-class engineers and aerospace specialists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To develop and deliver world-class aerospace and defense solutions that strengthen 
                national security capabilities while fostering technological independence through 
                indigenous innovation and manufacturing excellence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <Eye className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading aerospace technology company driving the future of autonomous 
                systems, defense capabilities, and avionics innovation, establishing new benchmarks 
                for reliability, performance, and technological advancement.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Pushing boundaries with cutting-edge solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reliability</h4>
              <p className="text-gray-600 text-sm">Delivering mission-critical dependability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">Maintaining highest quality standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
              <p className="text-gray-600 text-sm">Protecting national interests and data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;