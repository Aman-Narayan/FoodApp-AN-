import React from "react";
import HeadingComponent from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <HeadingComponent />
      <div className="about-page">
        <div className="about-content-area">
          <p className="about-pre-header">A Bit About Me</p>
          <h1 className="about-header">Who Am I?</h1>

          <div className="profile-img-wrapper">
            <img
              src="https://as1.ftcdn.net/jpg/02/74/19/86/1000_F_274198609_QWbxYbLnZaVbSW8UPRlCvs7ui1rO5ZzL.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>

          <p className="bio-text">
            Hi I’m Jack Smith. Click here to add your own text and edit me. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-icon red-icon">🎨</div>
            <h3 className="service-title">Responsive Design</h3>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-icon orange-icon">💻</div>
            <h3 className="service-title">Web Devloper</h3>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-icon orange-icon">⚙️</div>
            <h3 className="service-title">React Learner</h3>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="service-icon orange-icon">📱</div>
            <h3 className="service-title">Mobile View Devlopment</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
