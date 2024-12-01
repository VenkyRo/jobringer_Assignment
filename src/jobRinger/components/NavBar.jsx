import React from 'react'

const NavBar = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <span>Job</span>Ringer
        </div>
        <div className="navtitle">
          BRINGING YOU <span>THE PERFECT JOB</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home" className="button-primary">
                Jobs
              </a>
            </li>
            <li>
              <a href="#jobs">Active Employers</a>
            </li>
            <li>
              <a href="#about">Pricing</a>
            </li>
            <li>
              <button href="#login" className="button2">
                Jobseeker Login
              </button>
              <button href="#login" className="button2">
                Employer Login
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar