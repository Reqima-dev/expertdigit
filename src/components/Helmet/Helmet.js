import React from "react";

const Helmet = (props) => {
  document.title = props.title + " - Expert Digit  ";
  return <div className="w-100"> {props.children} </div>;
};

export default Helmet;
