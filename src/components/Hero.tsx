import React from 'react';
import { ArrowRight, Shield, Zap, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.2),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Next-Generation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {" "}Aerospace
              </span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Sentrix Labs pioneers indigenous avionics, defense technology, and autonomous drone systems. 
              Building the future of aerospace with cutting-edge innovation and uncompromising reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-105">
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">50+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">15+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">99%</div>
                <div className="text-gray-400 text-sm">Mission Success</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative z-10">
              {/* Tech Icons */}
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <Shield className="w-12 h-12 text-orange-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Defense Systems</h3>
                  <p className="text-gray-300 text-sm">Advanced military-grade solutions</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 mt-8">
                  <Zap className="w-12 h-12 text-orange-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Avionics Tech</h3>
                  <p className="text-gray-300 text-sm">Indigenous flight control systems</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 -mt-4">
                  <Target className="w-12 h-12 text-orange-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Autonomous Drones</h3>
                  <p className="text-gray-300 text-sm">AI-powered unmanned systems</p>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;