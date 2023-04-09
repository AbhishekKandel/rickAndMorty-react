import React, { useEffect } from "react";

import { useState } from "react";
import Card from "../molecules/Card";
import { Link } from "react-router-dom";
const CharCard = ({ url }) => {
  const [char, setChar] = useState("");
  const fetchCharactersByURL = async (url) => {
    const response = await fetch(url);
    const character = await response.json();

    setChar(character);
  };

  useEffect(() => {
    fetchCharactersByURL(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {char && (
        <Link to={`/character/${char.id}`}>
          <Card character={char} />
        </Link>
      )}
    </>
  );
};

export default CharCard;
