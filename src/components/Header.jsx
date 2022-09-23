import React from "react";
import closeWhite from "../assets/close_white.svg";
import "./header.css"

const Tag = ({ title }) => (
  <div className="tag">
    <p>{title}</p>
    <img src={closeWhite} alt="" />
  </div>
);

const Header = () => {
  const tags = ["Aceclofenac", "500mg"];

  return (
    <div className="container header_container">
      <h2>
        Paracetamol <span>(128 products)</span>
      </h2>
      <div className="tags">
        {tags.map((item, index) => (
          <Tag title={item} key={index} />
        ))}
      </div>
      <div className="remove">remove all</div>
    </div>
  );
};

export default Header;
