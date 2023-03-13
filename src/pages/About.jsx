import React, { useEffect } from "react";
import "../styles/about.css";
import aboutHome from "../assets/aboutHome.png";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import aboutImag2 from "../assets/aboutHome2.png";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); /* scrollez vers le haut après qu'un lien nous fait atterit sur la page*/

  return (
    <Helmet title="Qui somme nous ?">
      <section className="aboutContainer">
        <div className="about_Head" data-aos="zoom-in">
          <article className="left">
            <span>À PROPOS DE NOUS</span>
            <h1>On fait de grandes choses ensemble</h1>
            <p>
              Trouvez une équipe de spécialistes du marketing numérique sur
              laquelle vous pouvez compter. Nous construisons la confiance par
              la communication, la transparence et les résultats.
            </p>
          </article>
          <div className="right">
            <img src={aboutHome} alt="" />
          </div>
        </div>

        <div className="about_section">
          <h1>Fondé sur la confiance,</h1>
          <span>Axé sur les relations.</span>

          <div className="aboutPresentation" data-aos="fade-up">
            <div className="itemsAbout">
              <article className="left">
                <span>Expert Digit</span>
                <p>
                  est formé d’une jeune équipe très dynamique et spécialiser
                  dans la création, le déploiement et la gestion des solutions
                  informatiques pour ses clients avec une efficacité et une
                  efficience incontestable. <br /> <br /> Pour l’agence que nous
                  sommes, nous représentons pour chacun de nos clients, un
                  véritable socle d’idées novatrices et prometteuses à travers
                  nos propositions de solutions, nos forces techniques et
                  créatives, notre vision et nos valeurs qui font de nous la
                  famille professionnelle que nous sommes et qui nous permettent
                  d’évoluer sans cesse dans un esprit d’équipe.
                </p>
              </article>
              <div className="right"></div>
            </div>
          </div>

          <div className="appreciate">
            <div className="head">
              <h1>
                Ce que les clients apprécient <br /> le plus chez nous
              </h1>
            </div>

            <div className="appreciateContent">
              <article className="appreciateitems" data-aos="fade-up">
                <img src={icon4} alt="" />
                <h4>Notre Mission</h4>
                <p>
                  Développer des sites Web et des applications Web sur mesure,
                  la conception et l’impression des supports de communications
                  pour les entreprises et les particuliers ; aider et soutenir
                  les entrepreneurs et les start-up à lancer leur entreprise en
                  ligne ; mettre en place des techniques de communication
                  adaptée à vos besoins.
                </p>
              </article>
              <article className="appreciateitems" data-aos="fade-up">
                <img src={icon5} alt="" />
                <h4>Notre Vision</h4>
                <p>
                  Aider les entreprises, les start-up ou toute personne
                  désireuse de développer leur visibilité ou de vendre
                  facilement leur produits et services en ligne ; offrir à la
                  clientèle tout autre service lié à l’informatique.
                </p>
              </article>
              <article className="appreciateitems" data-aos="fade-up">
                <img src={icon6} alt="" />
                <h4>Nos Valeurs</h4>
                <p>
                  Notre plus grande valeur réside dans la satisfaction de nos
                  clients. Nous formons une équipe jeune, solide, très
                  dynamique, capable de faire face à tous les défis du digital.
                  Nous sommes déterminés à sensibiliser les générations à venir
                  aux possibilités offertes par le numérique dans tous les
                  secteurs d’activité et nous investissons sans cesse dans le
                  développement de l’économie numérique en Afrique et
                  particulièrement au Bénin.
                </p>
              </article>
            </div>
          </div>
        </div>

        <div className="aboutContent">
          <div className="right" data-aos="fade-right">
            <h1>
              Service client du <span>Lundi au Vendredi</span> de 08h-19 et le
              <span> Samedi</span> de 08h-14h.
            </h1>
            <article>
              Afin d'augmenter l'acquisition et la fidélisation de nouveaux
              clients pour les marques de commerce électronique, nous
              travaillons sur l'ensemble du parcours client. Notre équipe a fait
              ses preuves en aidant les marques à évoluer de manière rentable
              sur la base de stratégies performantes
            </article>
          </div>
          <div className="left" data-aos="fade-right">
            <img src={aboutImag2} alt="" />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default About;
