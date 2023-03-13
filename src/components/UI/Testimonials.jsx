import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonials.css"; 

import { testimonials } from "../../data/testimonialsData";

const Testimonials = () => {
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
    <div className="testiContainer">
      <div className="head">
        <h1>
          Ce que disent <br /> nos formidables clients
        </h1>
        <span>
          Notre équipe a fait ses preuves en aidant les marques à évoluer <br />
          de manière rentable sur la base de stratégies hautement performantes.
        </span>
      </div>
      <div className="testiComponent">
        <Slider {...settings}>
          {testimonials.map((cal) => {
            return (
              <div className="testiItmes">
                <div className="testAvatar">
                  <img src={cal.avatar} alt="" />
                  <div className="infoAvatar">
                    <h4> {cal.name} </h4>
                    <span> {cal.occupation} </span>
                    <div className="star">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star-half"></i>
                    </div>
                  </div>
                </div>
                <div className="infoTesti">
                  <p>{cal.testiParagraph}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
