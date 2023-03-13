import React, { useEffect, useState } from "react";
import "../styles/blog.css";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import Hilights from "../assets/Highlight.png";
import blogData from "../data/blogData";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [items, setItems] = useState(blogData);

  const filterItem = (categItems) => {
    const updatedItems = blogData.filter((currElem) => {
      return currElem.category === categItems;
    });
    setItems(updatedItems);
  };
  return (
    <Helmet title="Blog - Conseils marketing, business, développement et graphisme">
      <section className="blogpage">
        <div className="head">
          <h1>
            <img src={Hilights} alt="" />
            Blogs. Toutes les <br /> dernières tendances
          </h1>
          <p>
            Nous disposons d'une variétés de blogs. <br /> Conseils marketing,
            business, développement et graphisme
          </p>
        </div>
        <div className="blogFilter">
          <div className="filterBtn">
            <button className="btn " onClick={() => filterItem("business")}>
              Business
            </button>
            <button className="btn" onClick={() => filterItem("developpement")}>
              Développement
            </button>
            <button className="btn" onClick={() => filterItem("graphisme")}>
              Graphisme
            </button>
            <button className="btn" onClick={() => filterItem("marketing")}>
              Marketing
            </button>
            <button className="btn" onClick={() => setItems(blogData)}>
              Tout voir
            </button>
          </div>
          <div className="blogFIlterComponents">
            {items.map((item) => {
              return (
                <article className="blogFilterItems">
                  <Link to={`/blog/${item.title}`}>
                    <i class="bx bx-chevron-right"></i>
                  </Link>
                  <div className="imgBlog">
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                  <div className="blogResume">
                    <Link to={`/blog/${item.title}`}>
                      <h1> {item.title}</h1>
                    </Link>
                    <p>
                      {item.description.length > 100
                        ? item.description.substr(0, 100)
                        : item.description}{" "}
                      ...
                    </p>

                    <Link to={`/blog/${item.title}`} className="btnLireplus">
                      Lire la suite
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Blog;
