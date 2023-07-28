import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-navbar">
        <li>© 2023 Imgur, Inc</li>
        <li>About</li>
        <li>Terms</li>
        <li>Privacy</li>
        <li>Rules</li>
        <li>Help</li>
        <li>Emerald</li>
        <li>Store</li>
        <li>Advertise</li>
        <li>Blog</li>
        <li>Wellness</li>
        <li>CCPA</li>
        <li>
          <a href="https://apidocs.imgur.com/">API</a>
        </li>
      </ul>
      <div className="footer-app">
        <a href="https://imgurinc.com/mobileapps">Get the App</a>
      </div>
    </div>
  );
}
export default Footer;
