import React from 'react';
import { Layout, Server, Smartphone, Gauge } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications'
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Improving application speed and efficiency'
  }
];

export default function Services() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-12 text-center">What I Do</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="mb-4 inline-block bg-cyan-100 p-3 rounded-lg group-hover:bg-cyan-600 transition-colors">
              <service.icon 
                className="text-cyan-600 group-hover:text-white transition-colors" 
                size={24} 
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}