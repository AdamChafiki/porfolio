import React from 'react';
import { Coffee, Code, Users, Award } from 'lucide-react';

export default function Stats() {
  return (
    <div className="space-y-8">
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          I'm a Full Stack Developer with a passion for building beautiful, functional, 
          and user-friendly websites and applications. With 5+ years of experience in 
          web development, I specialize in creating scalable solutions that help businesses grow.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          When I'm not coding, you can find me exploring new technologies, contributing 
          to open source projects, or sharing my knowledge through technical writing and mentoring.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-start space-x-4">
          <div className="bg-cyan-100 p-3 rounded-lg">
            <Code className="text-cyan-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Clean Code</h3>
            <p className="text-gray-600 text-sm">Writing maintainable and scalable code</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="bg-cyan-100 p-3 rounded-lg">
            <Users className="text-cyan-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Team Player</h3>
            <p className="text-gray-600 text-sm">Collaborative and communicative approach</p>
          </div>
        </div>
      </div>

      <button className="mt-8 bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors flex items-center space-x-2">
        <Download size={20} />
        <span>Download Resume</span>
      </button>
    </div>
  );
}