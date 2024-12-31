import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Hi, I'm <span className="text-cyan-400">Adam Chafiki</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            I am a passionate Full Stack Developer, committed to delivering
            innovative and efficient solutions for web applications.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/AdamChafiki"
              className="transform hover:scale-110 transition-transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-chafiki/"
              className="transform hover:scale-110 transition-transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:adamchafiki3@example.com"
              className="transform hover:scale-110 transition-transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );
}
