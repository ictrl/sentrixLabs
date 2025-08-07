import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Naval Surveillance Drone System",
      category: "Autonomous Drones",
      description: "Advanced maritime surveillance platform with AI-powered threat detection and real-time intelligence gathering capabilities.",
      image: "https://images.pexels.com/photos/8828698/pexels-photo-8828698.jpeg",
      status: "In Development",
      timeline: "2024-2025",
      location: "Naval Command",
      highlights: ["50km Range", "AI Detection", "Weather Resistant"]
    },
    {
      title: "Indigenous Flight Management System",
      category: "Avionics",
      description: "Complete flight management and navigation system designed for modern military and civilian aircraft platforms.",
      image: "https://images.pexels.com/photos/163841/flight-aircraft-cockpit-cockpit-163841.jpeg",
      status: "Testing Phase", 
      timeline: "2023-2024",
      location: "Air Force Base",
      highlights: ["GPS Integration", "Voice Commands", "Redundant Safety"]
    },
    {
      title: "Tactical Communication Network",
      category: "Defence Systems",
      description: "Secure, encrypted communication platform enabling seamless coordination across multiple defense units and command centers.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      status: "Deployed",
      timeline: "2022-2023",
      location: "Defense HQ",
      highlights: ["256-bit Encryption", "Multi-band Radio", "Mesh Network"]
    },
    {
      title: "Border Security Monitoring System",
      category: "Autonomous Drones",
      description: "Integrated drone swarm system for continuous border monitoring with automated threat assessment and alert mechanisms.",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg",
      status: "Operational",
      timeline: "2023-Present",
      location: "Border Sectors",
      highlights: ["24/7 Monitoring", "Swarm Technology", "Thermal Imaging"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Deployed':
      case 'Operational':
        return 'bg-green-100 text-green-800';
      case 'Testing Phase':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Development':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Avionics':
        return 'bg-blue-600';
      case 'Defence Systems':
        return 'bg-orange-600';
      case 'Autonomous Drones':
        return 'bg-blue-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects & Use Cases</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications of our cutting-edge technology solutions across defense and aerospace domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Timeline: {project.timeline}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Location: {project.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Innovate Together?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with us to develop next-generation aerospace and defense solutions tailored to your specific requirements.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;