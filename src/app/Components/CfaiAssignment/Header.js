"use client";

import React from "react";
import Image from 'next/image'
import "./Header.css";

const Header = () => {
  return <header id="header" className="header">
    <Image alt="logo" className="header__logo" src="/cfai/kclogo.svg" width={205} height={45} />
    <nav className="navbar__desktop">
        <div>Study Destinations</div>
        <div>Services</div>
        <div>Company</div>
        <div>Upcoming Events</div>
        <button type="button" className="navbar__btn">Course Finder</button>
    </nav>
    <nav className="navbar__mobile">
        <button className="navbar__menu">
         ☰
        </button>
    </nav>
  </header>;
};

export default Header;
