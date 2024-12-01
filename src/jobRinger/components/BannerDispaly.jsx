import React from 'react'

const BannerDispaly = () => {
  return (
    <>
      <section className="hero">
        <div className="banner-container">
          <h1 className="banner-title">
            Welcome Offer <span className="highlight">WELCOME OFFER</span> -
            FREE JOB Postings and Much More.
          </h1>
          <div className="banner-buttons">
            <button className="btn register-btn">Register for FREE</button>
            <button className="btn post-job-btn">Post A Job</button>
            <a href="/sales-enquiry" className="sales-link">
              Sales Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerDispaly