import React, { useEffect } from "react";
import "../styles/contact.css";
import Helmet from "../components/Helmet/Helmet";

import riguv from "../assets/riguv.png";
import efvededef from "../assets/efvededef.png";
import FaqList from "../components/UI/FaqList";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Contactez-nous">
      <section className="contactContainer">
        <div className="contactHead">
          <article className="left">
            <span>CONTACTEZ-NOUS</span>
            <h1>Obtenez toutes nos informations directement à partir d'ici</h1>
            <p>
              Trouvez une équipe de spécialistes du marketing numérique sur
              laquelle vous pouvez compter. Nous construisons la confiance par
              la communication, la transparence et les résultats.
            </p>
          </article>
          <div className="right">
            <img src={riguv} alt="" />
          </div>
        </div>
        <div className="contactSub">
          <div className="subHead">
            <h1>Commençons.</h1>
            <p>
              Afin de vous assurer que votre site Web <br /> est convivial et
              optimisé pour l'algorithme de Google, nos experts <br /> en
              optimisation sur site nettoient le code et le copient.
            </p>
          </div>

          <div className="formCOntainer">
            <div className="formImg">
              <img src={efvededef} alt="" />
            </div>

            <form action="">
              <p>Envoie-nous un message</p>

              <div className="form_Name">
                <label htmlFor="" for="name">
                  Votre nom
                </label>
                <input type="text" name="" id="name" required />
              </div>

              <div className="form_Name">
                <label htmlFor="" for="email">
                  Votre email
                </label>
                <input type="email" name="" id="email" required />
              </div>

              <div className="form_Name">
                <label htmlFor="" for="object">
                  Objet
                </label>
                <input type="text" name="" id="object" required />
              </div>

              <div className="form_Name">
                <label htmlFor="" for="text">
                  Votre message
                </label>
                <textarea
                  name=""
                  id="text"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>

              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
        <div className="faq">
          <div className="faqHead">
            <h1>Comment pouvons-nous vous aider maintenant ?</h1>
            <article>
              Afin de vous assurer que votre site Web est convivial et <br />
              optimisé pour l'algorithme de Google, nos experts en <br />
              optimisation sur site nettoient le code et le copient.
            </article>
          </div>

          <div className="faqContainer">
            <FaqList />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Contact;
