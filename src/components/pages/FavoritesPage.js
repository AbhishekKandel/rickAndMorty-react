import Card from "../molecules/Card";
import "./homePage.css";
import "./favoritePage.css";
import React, { useState } from "react";
import Header from "../organisms/Header";

import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  //   useEffect(() => {
  //     localStorage.setItem("favorites", JSON.stringify(favorites));
  //   }, [favorites]);

  return (
    <>
      <Header text={"Favorite Characters"} />
      <div className="favorite-characters">
        <div className="character-cards-container">
          {favorites.length ? (
            favorites.map((character, index) => (
              <Link key={index} to={`/character/${character.id}`}>
                <Card key={index} character={character} />
              </Link>
            ))
          ) : (
            <p>Your favorite characters will appear here...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;
