import React from 'react';
import {
  Blocks, // React
  Layers, // Next.js
  Code2, // Laravel
  FileCode, // TypeScript
  Palette, // Tailwind
  Database, // MySQL
  Server, // MongoDB
  Box, // Angular
  Leaf // Spring Boot
} from 'lucide-react';

const skills = [
  {
    name: 'React',
    icon: Blocks,
    color: '#61DAFB',
    category: 'Frontend'
  },
  {
    name: 'Next.js',
    icon: Layers,
    color: '#000000',
    category: 'Frontend'
  },
  {
    name: 'Laravel',
    icon: Code2,
    color: '#FF2D20',
    category: 'Backend'
  },
  {
    name: 'TypeScript',
    icon: FileCode,
    color: '#3178C6',
    category: 'Language'
  },
  {
    name: 'Tailwind CSS',
    icon: Palette,
    color: '#38B2AC',
    category: 'Frontend'
  },
  {
    name: 'MySQL',
    icon: Database,
    color: '#4479A1',
    category: 'Database'
  },
  {
    name: 'MongoDB',
    icon: Server,
    color: '#47A248',
    category: 'Database'
  },
  {
    name: 'Angular',
    icon: Box,
    color: '#DD0031',
    category: 'Frontend'
  },
  {
    name: 'Spring Boot',
    icon: Leaf,
    color: '#6DB33F',
    category: 'Backend'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive set of technologies I work with to build modern web applications
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center group"
            >
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}15` }}
              >
                <skill.icon
                  size={32}
                  style={{ color: skill.color }}
                  className="transition-transform group-hover:rotate-12"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
              <span className="text-sm text-gray-500">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}