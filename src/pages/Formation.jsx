import React, {useEffect} from "react";
import "../styles/formation.css";
import Helmet from "../components/Helmet/Helmet";
import Hilights from "../assets/Highlight.png";
import { formationData } from "../data/formationData";

const Formation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Nous disposons d'une variétés de formation dans le domaine du numérique et du marketing">
      <section className="formationContainer">
        <div className="head">
          <h1>
            <img src={Hilights} alt="" />
            Développez vos compétences <br />
            grâce à nos formations
          </h1>
          <p>
            Nous disposons d'une variétés de formation dans <br /> le domaine du
            numérique et du marketing.
          </p>
        </div>

        <div className="formatGratuites">
          {formationData.map((item) => {
            return (
              <div className="formaItems">
                <div>
                  <h2> {item.title} </h2>
                  <span>
                    <i class="bx bx-time"></i> : {item.times}
                  </span>
                </div>
                <iframe
                  width="560"
                  height="315"
                  src={item.src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </section>
    </Helmet>
  );
};

export default Formation;
