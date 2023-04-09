import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CharName = ({ url }) => {
  const [char, setChar] = useState("");
  const [id, setId] = useState("");

  const fetchCharactersByURL = async (url) => {
    try {
      const response = await fetch(url);
      const character = await response.json();
      setChar(character.name);
      setId(character.id);
    } catch (error) {
      console.error(error);
      setChar("");
      setId("");
    }
  };

  useEffect(() => {
    if (url) {
      fetchCharactersByURL(url);
    } else {
      setChar("");
      setId("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return <Link to={`/character/${id}`}>{char}</Link>;
};

export default CharName;
