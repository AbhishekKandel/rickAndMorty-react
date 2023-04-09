import React from "react";
import Heading from "../atoms/Heading";
import { Link } from "react-router-dom";
import "./Header.css";
import image from "../../images/rickandmorty_logo.png";

const Header = ({ text }) => {
  return (
    <div className="page-header">
      <Link to="/">{<img src={image} alt="logo" />}</Link>
      <Heading text={text} />
      <div>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/EpisodesPage">
          Episodes
        </Link>
        <Link className="links" to="/FavoritesPage">
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default Header;
