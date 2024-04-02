import React, { useEffect, useState} from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCoffee,
//   faAddressBook,
//   faAirFreshener,
//   faAmbulance,
//   faAtom,
//   faBus,
//   faCoins,
//   faDice,
// } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import {navLinks,
  navLinkItem,
  navLinkText} from './navbar.module.css'

const NavBar = () => {

  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home <i className="fa-solid fa-house-user"> </i>
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
            {/*  <FontAwesomeIcon icon={faCoffee} size="1x" /> */}
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/portofolio" className={navLinkText}>
            Portofolio
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/mycv" className={navLinkText}>
            CV
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;