import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false)

  return (
    <>
      <svg
        className={'ham ham4 hamRotate' + (mobileNav ? ' active' : '')}
        viewBox="0 0 100 100"
        width="50"
        onClick={() => setMobileNav(!mobileNav)}
      >
        <path
          className="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className="line middle" d="m 70,50 h -40" />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className="navbar">
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
            alt="Company Logo"
          /> */}
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
