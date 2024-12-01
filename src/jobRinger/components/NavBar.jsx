import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header className="navbar">
        <Link to="/" className='links'>
          <div className="logo">
            <span>Job</span>Ringer
          </div>
        </Link>

        <div className="navtitle">
          BRINGING YOU <span>THE PERFECT JOB</span>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.jobringer.com/jobs"
                className="button-primary"
              >
                Jobs
              </a>
            </li>
            <li>
              <a href="https://www.jobringer.com/employers-list.php">
                Active Employers
              </a>
            </li>
            <li>
              <a href="#about">Pricing</a>
            </li>
            <li>
              <button
                href="https://www.jobringer.com/jobseeker/login"
                className="button2"
              >
                Jobseeker Login
              </button>
              <button
                href="https://www.jobringer.com/employer/login"
                className="button2"
              >
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