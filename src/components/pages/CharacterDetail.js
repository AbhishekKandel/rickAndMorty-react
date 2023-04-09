import "./characterDetail.css";
import React, { useEffect, useState } from "react";
import "../organisms/table/table.css";
import Image from "../atoms/Image";
import Header from "../organisms/Header";
import { useParams } from "react-router-dom";
import TableHeading from "../organisms/table/TableHeading";
import Episode from "../api/GetEpisodeByURL";

const CharacterDetail = () => {
  const { id } = useParams();

  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const [character, setCharacter] = useState("");
  const [name, setName] = useState("");
  const [location, setlocation] = useState("");
  const [origin, setOrigin] = useState("");

  const [episodes, setEpisodes] = useState([]);

  const fetchCharacterByURL = async (url) => {
    const response = await fetch(url);
    const character = await response.json();
    setCharacter(character);
    setName(character.name);
    setlocation(character.location.name);
    setOrigin(character.origin.name);
    setEpisodes(character.episode);
  };

  useEffect(() => {
    fetchCharacterByURL(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Header text={name} />

      <div className="container">
        <div className="character-detail-container">
          <div className="character-image">
            <Image url={character.image} imageName={character.name} />
          </div>
          <div className="character-details">
            <h2>{character.name}</h2>

            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {origin}</p>
            <p>Location: {location}</p>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <TableHeading />
          <tbody>
            {episodes.map((item, index) => (
              <Episode key={index} url={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CharacterDetail;
