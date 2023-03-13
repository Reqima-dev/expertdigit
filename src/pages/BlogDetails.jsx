import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/blogDetails.css";
import Helmet from "../components/Helmet/Helmet";
import blogData from "../data/blogData";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  // lien url de la page 👇🏾
  const urlLocation = window.location.href;
  const encodedUrl = encodeURI(urlLocation);
 

  // Message à envoyer 👇🏾
  const message = `Cet article 👉🏾 ${blog.title}. Prenez 5 minutes pour le lire `;

  //LinkdIn APi 👇🏾
  const linkedinApi = `https://www.linkedin.com/share?url=${encodedUrl}`;

  // facebook api 👇🏾
  const facebookAPi = `https://www.facebook.com/sharer.php?u=${encodedUrl}`;

  // twitter api 👇🏾
  const twitterApi = `http://twitter.com/intent/tweet?url=${encodedUrl}&text=${message} `;

  // reddit api 👇🏾
  const redditApi = `http://www.reddit.com/submit?url=${encodedUrl}&title=${message}`;

  // pinterest api 👇🏾
  const pinterestApi = `http://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${blog.imgUrl}&description=${message}`;

  // whatsap api 👇🏾
  const whatsappApi = `https://api.whatsapp.com/send?text=${message} ${encodedUrl}`;
  // mail api 👇🏾
  const mailpApi = `mailto:?subject=${message}&body=${encodedUrl}`;

  return (
    <Helmet title={blog.title}>
      <section className="blogDetails">
        <div className="blogDetailsPage">
          <div className="blogingController">
            <aside className="ecranLarge">
              <a
                href={linkedinApi}
                className="linkedin"
                rel="noopener noreferrer"
                title="Partager sur tinkedin"
                target="_blank"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
              <a
                href={twitterApi}
                className="twitter"
                rel="noopener noreferrer"
                title="Partager sur twitter"
                target="_blank"
              >
                <i class="bx bxl-twitter"></i>
              </a>
              <a
                href={facebookAPi}
                className="facebook"
                rel="noopener noreferrer"
                title="Partager sur facebook"
                target="_blank"
              >
                <i class="bx bxl-facebook"></i>
              </a>
              <a
                href={redditApi}
                className="reddit"
                rel="noopener noreferrer"
                title="Partager sur reddit"
                target="_blank"
              >
                <i class="bx bxl-reddit"></i>
              </a>
              <a
                href={pinterestApi}
                className="pinterest"
                rel="noopener noreferrer"
                title="Partager sur pinterest"
                target="_blank"
              >
                <i class="bx bxl-pinterest-alt"></i>
              </a>
              <a
                href={whatsappApi}
                className="whatsapp"
                rel="noopener noreferrer"
                title="Partager sur whatsapp"
                target="_blank"
              >
                <i class="bx bxl-whatsapp"></i>
              </a>
              <a
                href={mailpApi}
                className="gmail"
                rel="noopener noreferrer"
                title="Partager sur gmail"
                target="_blank"
              >
                <i class="bx bxl-gmail"></i>
              </a>
            </aside>

            <div className="bloging">
              <div className="box-single">
                <h2>{blog.title} </h2>
                <div className="authRefDetails">
                  <span className="author">
                    <i class="bx bx-user"></i> : {blog.author}
                  </span>
                  <span className="date">
                    <i class="bx bx-calendar"></i> : {blog.date}
                  </span>
                  <span className="time">
                    <i class="bx bx-time"></i> : {blog.time}
                  </span>
                </div>
              </div>
              <div className="imgCover01">
                <img src={blog.imgUrl} alt="" />
              </div>
              <div className="description">
                <div className="description_01">
                  <p> {blog.description} </p>
                  <br />
                  <p className="quote">{blog.quote}</p>
                  <br />
                  <p>{blog.description2}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rightContainer">
            <div className="right">
              <h4>Articles similaires</h4>
              {blogData.map((val, index) => {
                if (index < 4) {
                  return (
                    <div className="recent_blog" key={val.id}>
                      <div className="recentImg">
                        <img src={val.imgUrl} alt={val.title} />
                      </div>
                      <h6>
                        <Link to={`/blog/${val.title}`}>{val.title}</Link>
                      </h6>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="subRight">
              <h3>Recevez chaque jour nos meilleurs conseils.</h3>
              <form action="">
                <input
                  type="email"
                  name="adresseEmail"
                  id=""
                  placeholder="votre adresse email ...."
                  required
                />
                <button type="submit">Inscription</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
