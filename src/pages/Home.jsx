import React, { useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

import "../styles/home.css";
import Hilights from "../assets/Highlight.png";
import lrktnh1 from "../assets/lrktnh1.png";
import lrktnh2 from "../assets/lrktnh2.png";
import lrktnh3 from "../assets/lrktnh3.png";
import ico1 from "../assets/icon1.png";
import ico2 from "../assets/icon2.png";
import ico3 from "../assets/icon3.png";
import aboutImag from "../assets/aboutHome.png";
import aboutImag2 from "../assets/aboutHome2.png";
import { besoin } from "../data/besoinData";
import { reaction } from "../data/reactionData";
import Testimonials from "../components/UI/Testimonials";
import BlogList from "../components/UI/BlogList";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="container">
        <div className="bghero" data-aos="fade-up">
          <h1>
            <img src={Hilights} alt="" />
            Agence de marketing <br /> numérique
          </h1>
        </div>

        <div className="bgCenter">
          <p>Améliorez votre entreprise dans le numérique.</p>
          <Link to="/service">Commencer</Link>
        </div>

        <div className="heroCotent">
          <div className="contentItems" data-aos="zoom-in">
            <img src={lrktnh1} alt="" />
          </div>
          <div className="contentItems" data-aos="zoom-in">
            <img src={lrktnh2} alt="" />
          </div>
          <div className="contentItems" data-aos="zoom-in">
            <img src={lrktnh3} alt="" />
          </div>
        </div>

        <section className="favorites" data-aos="fade-right">
          <div>
            <div className="favorItems">
              <h2>4.8k</h2>
              <span>TRAVAUX RÉALISÉS</span>
            </div>
            <div className="favorItems">
              <h2>+5 ans</h2>
              <span>EXPÉRIENCE INDUSTRIELLE</span>
            </div>
            <div className="favorItems">
              <h2>+150</h2>
              <span>CLIENTS MONDIAUX</span>
            </div>
            <div className="favorItems">
              <h2>+50</h2>
              <span>Formations </span>
            </div>
          </div>
        </section>

        <section className="servicesfavor">
          <div className="sevHead">
            <h1>Nos services résolvent tout problème commercial</h1>
            <p>
              Notre équipe a fait ses preuves en aidant les marques à évoluer de
              manière rentable sur la base de stratégies hautement performantes.
            </p>
          </div>

          <div className="serviceContent">
            <div className="servItems" data-aos="fade-up">
              <div className="ico">
                <img src={ico1} alt="" />
              </div>
              <div className="servInfo">
                <h1>Publicité Digitale</h1>
                <p>
                  Toute opération ou campagne publicitaire a pour but d'attirer
                  l'attention du client sur le produit ou la marque ainsi que de
                  le familiariser avec lui afin d'optimiser et de faciliter
                  l'acte d'achat.
                </p>
              </div>
            </div>

            <div className="servItems" data-aos="fade-up">
              <div className="ico">
                <img src={ico2} alt="" />
              </div>
              <div className="servInfo">
                <h1>Optimisation du site Web</h1>
                <p>
                  Pour que votre entonnoir soit un succès, vous devez le rendre
                  aussi fluide que possible. <br /> L'augmentation des
                  conversions, du trafic répété et de l'autorité en ligne sur
                  votre site Web est notre priorité absolue.
                </p>
              </div>
            </div>

            <div className="servItems" data-aos="fade-up">
              <div className="ico">
                <img src={ico3} alt="" />
              </div>
              <div className="servInfo">
                <h1>Marketing par e-mail et SMS</h1>
                <p>
                  Les prospects sont nourris grâce à nos services d'e-mail, de
                  SMS et d'automatisation, ce qui permet d'acquérir et de
                  fidéliser des clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="aboutHome">
          <div className="aboutContent">
            <div className="left" data-aos="fade-right">
              <img src={aboutImag} alt="" />
            </div>
            <div className="right" data-aos="fade-up">
              <h1>Pourquoi avez-vous besoin du marketing numérique</h1>
              <article>
                Afin d'augmenter l'acquisition et la fidélisation de nouveaux
                clients pour les marques de commerce électronique, nous
                travaillons sur l'ensemble du parcours client. Notre équipe a
                fait ses preuves en aidant les marques à évoluer de manière
                rentable sur la base de stratégies performantes
              </article>
              <Link to="/about">
                Savoir plus <i class="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </section>

        <section className="besoinContainer">
          <h2>De quoi avez-vous besoin ?</h2>

          <div className="slideComponent">
            <Slider {...settings}>
              {besoin.map((val) => {
                return (
                  <div className="besoinContent">
                    <div>
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="infoBesoin">
                      <span>{val.span}</span>
                      <h2>{val.title}</h2>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="btn">
            <p>Rendez votre marketing plus efficace</p>
            <Link to="/service">
              Savoir plus <i class="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
        </section>

        <section className="reaction">
          <div>
            <div className="reactionHead" data-aos="fade-up">
              <h1>
                <img src={Hilights} alt="" />
                Prêt pour votre <br /> succès numérique ?
              </h1>
              <p>Nos services résolvent tout problème commercial.</p>
            </div>

            <div className="reaction_content">
              {reaction.map((item, index) => {
                if (index < 4) {
                  return (
                    <div
                      className="reactImg"
                      style={{ backgroundImage: `url(${item.cover})` }}
                      data-aos="zoom-in"
                    >
                      <article className="info">
                        <h1> {item.title} </h1>
                        <p>{item.soustitle}</p>
                        <ul>
                          <li>
                            <i class="bx bx-check"></i>
                            <p>
                              <span> {item.spanCommandOne} </span>{" "}
                              {item.descOne}
                            </p>
                          </li>
                          <li>
                            <i class="bx bx-check"></i>
                            <p>
                              <span> {item.spanCommandTwo} </span>{" "}
                              {item.descTwo}
                            </p>
                          </li>
                          <li>
                            <i class="bx bx-check"></i>
                            <p>
                              <span> {item.spanCommandThree} </span>{" "}
                              {item.descThree}
                            </p>
                          </li>
                        </ul>
                      </article>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          <button className="linkto">
            <Link to="/service">
              Details <i class="bx bx-right-arrow-alt"></i>
            </Link>
          </button>
        </section>

        <section className="aboutHome">
          <div className="aboutContent">
            <div className="right" data-aos="fade-right">
              <h1>
                Service client du <span>Lundi au Vendredi</span> de 08h-19 et le
                <span> Samedi</span> de 08h-14h.
              </h1>
              <article>
                Afin d'augmenter l'acquisition et la fidélisation de nouveaux
                clients pour les marques de commerce électronique, nous
                travaillons sur l'ensemble du parcours client. Notre équipe a
                fait ses preuves en aidant les marques à évoluer de manière
                rentable sur la base de stratégies performantes
              </article>
              <Link to="/contact">
                Contactez nous<i class="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
            <div className="left" data-aos="fade-right">
              <img src={aboutImag2} alt="" />
            </div>
          </div>
        </section>

        <section className="blogContainer">
          <div className="head">
            <h2>Derniers articles et blog</h2>
            <p>Améliorer les nouvelles idées commerciales</p>
          </div>

          <div className="blogContent">
            <BlogList />
          </div>

          <button className="linkto">
            <Link to="/blog">
              Nos blog ici <i class="bx bx-right-arrow-alt"></i>
            </Link>
          </button>
        </section>

        <section className="testimonials">
          <Testimonials />
        </section>

        <section className="newslettersContainer">
          <div className="head">
            <h1>Newsletter</h1>
            <p>Entrez votre adresse mail pour ne rien rater des nouveautés.</p>
          </div>
          <form action="">
            <label htmlFor="" for="email">
              <i class="bx bx-envelope"></i>
            </label>
            <input
              type="email"
              name="email Newsletter"
              id="email"
              placeholder="votre email ici"
              required
            />
            <button type="submit">Envoyer</button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Home;
