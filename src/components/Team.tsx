import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chief Executive Officer & Co-Founder",
      specialization: "Aerospace Engineering",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      experience: "20+ years",
      education: "PhD Aerospace Engineering, IIT Delhi",
      achievements: ["Former DRDO Scientist", "15+ Patents", "Aviation Excellence Award"]
    },
    {
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      specialization: "Avionics & Control Systems",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
      experience: "18+ years",
      education: "M.Tech Control Systems, IISc Bangalore",
      achievements: ["Ex-HAL Chief Designer", "10+ Patents", "Women in Tech Leader"]
    },
    {
      name: "Col. Vikram Singh (Retd.)",
      position: "Head of Defense Solutions",
      specialization: "Military Operations & Strategy",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      experience: "25+ years",
      education: "Military College of Engineering",
      achievements: ["Distinguished Service Medal", "Strategic Operations Expert", "Defense Consultant"]
    },
    {
      name: "Dr. Anita Patel",
      position: "Lead AI Researcher",
      specialization: "Artificial Intelligence & Machine Learning",
      image: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg",
      experience: "12+ years",
      education: "PhD Computer Science, IIT Bombay",
      achievements: ["AI Research Pioneer", "8+ Patents", "Tech Innovation Award"]
    },
    {
      name: "Arjun Mehta",
      position: "Director of Engineering",
      specialization: "Systems Integration & Testing",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      experience: "16+ years",
      education: "B.Tech Electronics, NIT Trichy",
      achievements: ["Systems Integration Expert", "Quality Assurance Leader", "Innovation Excellence"]
    },
    {
      name: "Dr. Kavya Reddy",
      position: "Head of R&D",
      specialization: "Advanced Materials & Sensors",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      experience: "14+ years",
      education: "PhD Materials Science, IISC Bangalore",
      achievements: ["Materials Innovation Leader", "Research Excellence Award", "12+ Publications"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders and expert engineers driving Sentrix Labs' mission to revolutionize 
            aerospace and defense technology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>

                {/* Experience & Education */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Experience:</span>
                    <span className="text-gray-900 font-semibold">{member.experience}</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="text-gray-500">Education:</span>
                    <div className="text-xs mt-1">{member.education}</div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-orange-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-8">Our Team by Numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-blue-100">Engineers & Scientists</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">200+</div>
              <div className="text-blue-100">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-blue-100">PhD Holders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">60+</div>
              <div className="text-blue-100">Patents & Publications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;