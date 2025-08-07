import React from 'react';
import { Radar, Shield, Cpu, Zap, Target, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Radar className="w-12 h-12" />,
      title: "Advanced Avionics",
      description: "Indigenous flight management systems, navigation solutions, and cockpit technologies designed for modern aircraft.",
      features: ["Flight Control Systems", "Navigation & GPS", "Communication Systems", "Mission Computers"],
      color: "blue"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Defence Systems",
      description: "Comprehensive defense technology solutions including surveillance, radar systems, and tactical communication platforms.",
      features: ["Radar Systems", "Electronic Warfare", "Command & Control", "Tactical Networks"],
      color: "orange"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Autonomous Drones",
      description: "AI-powered unmanned aerial systems for surveillance, reconnaissance, and specialized mission requirements.",
      features: ["AI Navigation", "Real-time Analytics", "Mission Planning", "Swarm Intelligence"],
      color: "blue"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three core domains driving the future of aerospace and defense technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className={`p-8 ${service.color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-700' : 'bg-gradient-to-br from-orange-600 to-orange-700'} text-white`}>
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-blue-100 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="p-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${service.color === 'blue' ? 'bg-blue-600' : 'bg-orange-600'}`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-900 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Our Technology Stack</h3>
          <div className="grid md:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <Cpu className="w-12 h-12 text-orange-400 mb-3" />
              <span className="text-gray-300 text-sm">AI/ML</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-12 h-12 text-orange-400 mb-3" />
              <span className="text-gray-300 text-sm">Real-time Systems</span>
            </div>
            <div className="flex flex-col items-center">
              <Settings className="w-12 h-12 text-orange-400 mb-3" />
              <span className="text-gray-300 text-sm">Embedded Systems</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-orange-400 mb-3" />
              <span className="text-gray-300 text-sm">Cybersecurity</span>
            </div>
            <div className="flex flex-col items-center">
              <Radar className="w-12 h-12 text-orange-400 mb-3" />
              <span className="text-gray-300 text-sm">Signal Processing</span>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-12 h-12 text-orange-400 mb-3" />
              <span className="text-gray-300 text-sm">Control Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;