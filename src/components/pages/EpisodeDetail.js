import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../organisms/Header";
import Text from "../atoms/Text";
import CharCard from "../api/GetCardByURL";
import "./episodeDetail.css";

const EpisodeDetail = () => {
  const { id } = useParams();

  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/episode/${id}`
        );

        setEpisode(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {episode ? (
        <>
          <Header text={episode.name} />
          <div className="episode-detail-container">
            <Text text={"Episode name: " + episode.name} />
            <Text text={"Code: " + episode.episode} />
            <Text text={"Air date: " + episode.air_date} />
          </div>
          <div className="character-cards-container">
            {episode.characters.map((character, index) => (
              <CharCard key={index} url={character} />
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default EpisodeDetail;
