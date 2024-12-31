import React from 'react';
import { Download, Coffee, Code, Users } from 'lucide-react';

export default function Profile() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
          alt="Profile"
          className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
        />
        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="px-4 py-2">
              <div className="text-2xl font-bold text-cyan-600">5+</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
            <div className="px-4 py-2 border-l border-gray-200">
              <div className="text-2xl font-bold text-cyan-600">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}