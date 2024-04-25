import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <div className="mt-4 flex justify-center lg:justify-end space-x-9">
          <a href='https://www.facebook.com/dario.jakovleski10'><FontAwesomeIcon icon={faFacebookF} className="text-black text-3xl hover:text-white mx-2" /></a>
          <a href=''> <FontAwesomeIcon icon={faTwitter} className="text-black text-3xl hover:text-white mx-2" /></a>
          <a href='https://www.instagram.com/djakovleskiix/'> <FontAwesomeIcon icon={faInstagram} className="text-black text-3xl hover:text-white mx-2" /></a>
          <a href='https://www.linkedin.com/in/dario-jakovleski-16417523b/'> <FontAwesomeIcon icon={faLinkedin} className="text-black text-3xl hover:text-white mx-2" /></a>
          <a href='https://github.com/dariyozz'> <FontAwesomeIcon icon={faGithub} className="text-black text-3xl hover:text-white mx-2" /></a>
        </div>
    <p>&copy;{currentYear} Dario Jakovleski | All Rights Reserved</p>
  </footer>
  );
};

export default Footer;
