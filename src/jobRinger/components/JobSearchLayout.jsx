import React from "react";


const JobSearchLayout = () => {
  return (
    <div className="job-search-container">
      {/* Top Section: Search Bar */}
      <div className="search-bar-section">
        <div className="title">
          <h1>BRINGING YOU THE PERFECT JOB!</h1>
          <p>11,000+ JOBS to Apply</p>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Jobs Now"
            className="search-input"
          />
          <button className="btn search-btn">Search</button>
        </div>
        <div className="action-buttons">
          <button className="btn view-jobs-btn">View Jobs</button>
          <button className="btn register-btn">Register For FREE</button>
        </div>
      </div>

      {/* Bottom Section: Quick Job Search */}
      <div className="quick-search-section">
        <h2>Quick Job Search</h2>
        <div className="tags">
          <span>#Fresher</span>
          <span>#Work From Home</span>
          <span>#WFH</span>
          <span>#IT</span>
          <span>#HR</span>
          <span>#Back Office</span>
          <span>#BPO Jobs</span>
          <span>#ITES</span>
          <span>#Finance</span>
          <span>#Accounts</span>
          <span>#Medical</span>
          <span>#Pharma</span>
          <span>#Manager</span>
          <span>#Developer</span>
          <span>#Marketing</span>
          <span>#Engineering</span>
          <span>#Non Government Jobs</span>
        </div>
      </div>
    </div>
  );
};

export default JobSearchLayout;
