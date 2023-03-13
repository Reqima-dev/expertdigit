import React from "react";
import { Link } from "react-router-dom";
import blogData from "../../data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((item, index) => {
        if (index < 3) {
          return <BlogItem item={item} key={item.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, description } = item;
  return (
    <>
      <article className="blogItems">
        <Link to={`/blog/${title}`}>
          <i class="bx bx-chevron-right"></i>
        </Link>
        <div className="imgBlog">
          <img src={imgUrl} alt="" />
        </div>
        <div className="blogResume">
          <Link to={`/blog/${title}`}>
            <h1> {title}</h1>
          </Link>
          <p>
            {description.length > 100
              ? description.substr(0, 100)
              : description}{" "}
            ...
          </p>

          <Link to={`/blog/${title}`} className="btnLireplus">
            Lire la suite
          </Link>
        </div>
      </article>
    </>
  );
};

export default BlogList;
