import React from "react";
import search from "../assets/search.svg";
import "./search.css"

const SearchBar = () => {
  return (
    <div className="container search_container">
      <div className="location">
        <p>
          {`Medical Darpan > Search > `} <span>FabiFlu Tablet</span>
        </p>
      </div>
      <div className="search_input">
        <div className="input">
          <img src={search} alt="search" />
          <input type="text" />
          <div className="btn">Search</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
