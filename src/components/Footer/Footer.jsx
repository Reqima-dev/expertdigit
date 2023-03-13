import React from "react";
import "../../styles/footer.css";
import ExpertDigitLOGO from "../../assets/ExpertDigitBlanc.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img src={ExpertDigitLOGO} alt="" />
            </Link>
          </div>
          <article>
            <span>Expert Digit</span> est formé d’une jeune équipe très
            dynamique et spécialiser dans la création, le déploiement et la
            gestion des solutions informatiques pour ses clients avec une
            efficacité et une efficience incontestable.
          </article>
          <div className="adressLink">
            <ul>
              <li>
                <i class="bx bxs-map"></i>
                ste Rita, Cotonou (Rép. du Bénin)
              </li>
              <li>
                <i class="bx bx-envelope"></i>
                <a href="mailto:infos.expertdigit@gmail.com">
                  infos.expertdigit@gmail.com
                </a>
              </li>
              <li>
                <i class="bx bx-phone"></i>
                <a href="tel:+22964098060">(+229)64 098 060 </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="center">
          <div className="centerOne">
            <h5>Liens rapides</h5>
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
          </div>

          <div className="centerTwo">
            <h5>Liens utiles</h5>
            <ul>
              <li>
                <a href="#.">Politique de Confidentialité</a>
              </li>
              <li>
                <a href="#.">FAQ</a>
              </li>
              <li>
                <a href="#.">Termes & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <h5>Suivez-nous</h5>
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

          <div className="contactWhatsApp">
            <a
              href="https://wa.me/+22964098060"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp : (+229) 640.980.60
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <span>
          &copy; Expert Digit {currentYear} - Développé par
          <a href="/home"> Expert Digit</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
