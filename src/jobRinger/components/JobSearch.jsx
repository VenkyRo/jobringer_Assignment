import React from 'react'

const JobSearch = () => {
  return (
    <>
      {/* Job Search Form */}
      <section className="search-form">
        <input type="text" placeholder="Job title or keyword" />
        <input type="text" placeholder="Location" />
        <button>Search Jobs</button>
      </section>
    </>
  );
}

export default JobSearch