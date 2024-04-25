import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!'); // Example: show an alert for demo purposes
  };

  return (
    <section id="contact" className="mb-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">Contact Me</h2>
      <p className="text-lg lg:text-xl mb-4">
        Feel free to reach out to me via email or phone for project inquiries or collaborations.
      </p>
      <p className="text-lg">Email: dariojakovleski10@gmail.com</p>
      <p className="text-lg">Phone: +123456789</p>

      {/* Contact Form */}
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-semibold">Your Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary" required />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold">Email Address</label>
          <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary" required />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-primary" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-secondary transition-colors">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
