import React from 'react';
import Profile from './Profile';
import Stats from './Stats';
import Services from './Services';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Passionate about creating exceptional digital experiences through clean code and intuitive design
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <Profile />
          <Stats />
        </div>

        <Services />
      </div>
    </section>
  );
}