import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character) => {
    const index = favorites.findIndex((c) => c.id === character.id);
    if (index === -1) {
      setFavorites([...favorites, character]);
    } else {
      const newFavorites = [...favorites];
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
    }
  };

  const isFavorite = (character) => {
    return favorites.findIndex((c) => c.id === character.id) !== -1;
  };

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleCardClick = (event) => {
    // event.cancelBubble = true;
    event.stopPropagation();
    // event.stopImmediatePropagation();
  };

  return (
    <Context.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        debounce,
        handleCardClick,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
