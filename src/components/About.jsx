import React from 'react';

const About = () => {
  return (
    <section id="about" className="mb-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">About Me</h2>
      <div className="flex flex-col items-center">
        <div className="lg:ml-8 text-lg lg:text-xl">
          <p className="mb-4">
            Hi! I'm Dario Jakovleski, a passionate web developer with expertise in frontend technologies.
          </p>
          <p className="mb-4">
            I specialize in creating modern and responsive websites using React.js, HTML, CSS, and JavaScript.
          </p>
          <p>
            Let's work together to bring your ideas to life!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
