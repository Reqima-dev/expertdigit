import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/services.css";

import { reaction } from "../data/reactionData";
import Hilights from "../assets/Highlight.png";
// import { v4 as uuidv4 } from "uuid";
import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); /* scrollez vers le haut après qu'un lien nous fait atterit sur la page*/

  return (
    <Helmet title="Nos services résolvent tout problème commercial.">
      <section className="servicesContainer">
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
              {reaction.map((item) => {
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
                            <span> {item.spanCommandOne} </span> {item.descOne}
                          </p>
                        </li>
                        <li>
                          <i class="bx bx-check"></i>
                          <p>
                            <span> {item.spanCommandTwo} </span> {item.descTwo}
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
              })}
            </div>
          </div>
        </section>
      </section>
    </Helmet>
  );
};

export default Service;
