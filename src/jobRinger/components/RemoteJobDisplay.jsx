import React, { useState, useEffect } from "react";

import { jobDataR } from "../pages/dataR";

const RemoteJobDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 4; // Number of cards visible at once

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(jobDataR.length / itemsPerView)
      );
    }, 5000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Manual Scroll Handlers
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < Math.ceil(jobDataR.length / itemsPerView)
        ? prevIndex + 1
        : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0
        ? prevIndex - 1
        : Math.ceil(jobDataR.length / itemsPerView) - 1
    );
  };
  return (
    <>
      <div className="Featured-Jobs">Remote Jobs</div>
      <div className="job-slider-container">
        <button className="nav-button left" onClick={handlePrev}>
          <box-icon name="chevrons-left"></box-icon>
        </button>
        <div
          className="job-slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {jobDataR.map((job, index) => (
            <div key={index} className="job-card">
              <div className="badge">{job.badge}</div>
              <h3 className="job-title">{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="details">
                <span>
                  <box-icon name="time"></box-icon>
                  {job.jobType}
                </span>{" "}
                |{" "}
                <span>
                  <box-icon name="briefcase-alt-2"></box-icon>
                  {job.experience}
                </span>
              </p>
              <p className="location">
                <box-icon name="current-location"></box-icon>
                {job.location}
              </p>
              <button className="apply-btn">
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply
                </a>
              </button>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={handleNext}>
          <box-icon name="chevrons-right"></box-icon>
        </button>
      </div>
    </>
  );
};

export default RemoteJobDisplay;
