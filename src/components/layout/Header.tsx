import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false)

  return (
    <>
      <button
        className="float-button-menu-toggle"
        onClick={() => setMobileNav(!mobileNav)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className="navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
            alt="Company Logo"
          />
          <div
            className={(mobileNav ? 'is-active ' : '') + 'menu-toggle'}
            onClick={() => setMobileNav(!mobileNav)}
            id="mobile-menu"
          >
            {/* <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span> */}
          </div>
          <ul className={'nav no-search ' + (mobileNav ? 'mobile-nav' : '')}>
            <li className="nav-item">
              <Link to="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Products</Link>
            </li>

            <i className="fas fa-search" id="search-icon"></i>
            <input
              className="search-input"
              type="text"
              placeholder="Search.."
            />
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
