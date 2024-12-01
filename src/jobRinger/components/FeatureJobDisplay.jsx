import React, { useState, useEffect } from "react";
import { jobData } from "../pages/data"; // Ensure this contains your job data

const FeatureJobDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 4; // Number of cards visible at once
  const cardWidth = 100 / itemsPerView; // Each card takes up an equal percentage of the total width

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % jobData.length; // Wrap to 0 when reaching the last card
      });
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Manual Scroll Handlers
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % jobData.length; // Move to next card
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? jobData.length - 1 : prevIndex - 1; // Wrap to the last card if we're at the first one
    });
  };

  return (
    <>
      <div className="Featured-Jobs">Featured Jobs</div>
      <div className="job-slider-container">
        <button className="nav-button left" onClick={handlePrev}>
          <box-icon name="chevrons-left"></box-icon>
        </button>
        <div
          className="job-slider"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}%)`, // Move 1 card at a time
            transition: "transform 0.5s ease-in-out"
          }}
        >
          {jobData.map((job, index) => (
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

export default FeatureJobDisplay;
