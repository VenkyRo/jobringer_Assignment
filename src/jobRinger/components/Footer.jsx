import React from "react";

import {} from 'boxicons'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Jobs in India</h3>
        <ul className="footer-list">
          {[
            "Mumbai",
            "Delhi",
            "Ajmer",
            "Pune",
            "Hyderabad",
            "Agra",
            "Chennai",
            "Kolkata",
            "Indore",
            "Gurugram",
            "Jaipur",
            "Ahmedabad"
          ].map((city, index) => (
            <li key={index}>#{city}</li>
          ))}
        </ul>
      </div>

      <div className="footer-section">
        <h3>International Jobs</h3>
        <ul className="footer-list">
          {[
            "Africa",
            "USA",
            "UK",
            "Australia",
            "Canada",
            "Singapore",
            "Dubai",
            "Saudi Arabia",
            "New Zealand"
          ].map((country, index) => (
            <li key={index}>#{country}</li>
          ))}
        </ul>
      </div>

      <div className="footer-section">
        <h3>Statistics</h3>
        <p>
          Jobs Posted: <b>31,004</b>
        </p>
        <p>
          Jobs Filled: <b>15,153</b>
        </p>
        <p>
          Employers: <b>19,768</b>
        </p>
        <p>
          Active Users: <b>1,293,690</b>
        </p>
      </div>

      <div className="footer-disclaimer">
        <p>
          Disclaimer: All Trademarks and Logos are the property of their
          respective owners, depicted here purely for representation purpose. |
          Jobringer.com has taken all reasonable steps to ensure that
          information on this site is genuine. Job Applicants are advised to
          evaluate independently. Jobringer.com shall not have any
          responsibility in this regard. All Jobseeker services are strictly
          designed & meant only for job search assistance and to maximize the
          chances for the jobseekers to get their dream job. All Job Seeker
          Credentials and Employment Opportunities are subject to individual
          merit & evaluation. We do not guarantee any job to any jobseeker.
        </p>
      </div>

      <div className="footer-section">
        <h3>Recognized By</h3>
        <h2>#startup@India</h2>
      </div>

      <div className="footer-social">
        <h3>Follow us on</h3>
        <box-icon type="logo" name="linkedin-square"></box-icon>
        <box-icon type="logo" name="facebook-square"></box-icon>
        <box-icon name="instagram" type="logo"></box-icon>
        <box-icon name="github" type="logo"></box-icon>
        <box-icon name="whatsapp" type="logo"></box-icon>
        <box-icon name="twitter" type="logo"></box-icon>
        <box-icon name="youtube" type="logo"></box-icon>
      </div>

      <div className="footer-links">
        <a href="/terms-and-conditions">Terms and Conditions</a> |{" "}
        <a href="/privacy-policy">Privacy Policy</a> |{" "}
        <a href="/refund-policy">Refund / Cancellation Policy</a> |{" "}
        <a href="/about-us">About Us</a> | <a href="/contact-us">Contact Us</a>{" "}
        | <a href="/faq">FAQ</a>
      </div>

      <div className="footer-bottom">
        <p>© All Rights Reserved @ 2024 Jobtech Ventures Private Limited.</p>
      </div>
    </footer>
  );
};

export default Footer;
