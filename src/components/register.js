
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <div className="organization-details">
        <div className="detail-item">
          <h2>SALAMI RESTRAUNT</h2>
          <p>Your Organization Name</p>
        </div>
        <div className="detail-item">
          <h2>Address</h2>
          <p>Empire mall, second floor, Manglore</p>
        </div>
        <div className="detail-item">
          <h2>Location</h2>
          <p>Latitude: 40.7128, Longitude: -74.0060</p>
        </div>
        <div className="detail-item">
          <h2>Contact Details</h2>
          <p>Email: salamirestro@gamil.com</p>
          <p>Phone: 9834567890</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
