import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              loading="lazy"
              alt="Working on laptop"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 mb-6">
              I'm a skilled Full Stack Developer dedicated to delivering
              exceptional web applications tailored to meet client needs. With a
              strong focus on performance, scalability, and user experience, I
              turn ideas into functional and visually appealing solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My passion lies in collaborating with clients to bring their
              visions to life, ensuring their goals are not only met but
              exceeded. Let's work together to create something extraordinary
              for your business!
            </p>
            <a
              href="/src/assets/cv/cv_adam_chafiki.pdf"
              download="cv_adam_chafiki.pdf"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
