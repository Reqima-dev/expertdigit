import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logoExpertDigit from "../../assets/ExpertDigit.png";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/about",
    display: "A Propos",
  },
  {
    path: "/service",
    display: "Services",
  },
  {
    path: "/formation",
    display: "Formation",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [navHeader, setNavHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavHeader(true);
    } else {
      setNavHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <div className="herobc"></div>
      <header className={navHeader ? "header active" : "header"}>
        <div className="logo">
          <Link to="/home">
            <img src={logoExpertDigit} alt="ExpertDigit" />
          </Link>
        </div>

        <nav
          className={mobileNav ? "#navMobile active" : "#navMobile"}
          id="navMobile"
        >
          <div className="menu">
            {navLinks.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={(navClass) =>
                  navClass.isActive ? "nav__active nav__items" : "nav__items"
                }
              >
                {item.display}
              </NavLink>
            ))}
          </div>
          <div className="contactWhatsApp">
            <a
              href="https://wa.me/+22964098060"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp : (+229) 640.980.60
            </a>

            <div className="socialMedia">
              <a href="#.">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#.">
                <i class="bx bxl-linkedin"></i>
              </a>
              <a href="#.">
                <i class="bx bxl-youtube"></i>
              </a>
              <a href="#.">
                <i class="bx bxl-tiktok"></i>
              </a>
              <a href="#.">
                <i class="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </nav>

        <button className="barIco" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </button>
      </header>
    </>
  );
};

export default Header;
