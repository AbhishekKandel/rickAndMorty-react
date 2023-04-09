import React, { useEffect } from "react";

import { useState } from "react";
import TableRow from "../organisms/table/TableRow";
const Episode = ({ url }) => {
  const [episode, setEpisode] = useState("");
  const fetchEpisodeByURL = async (url) => {
    const response = await fetch(url);
    const episode = await response.json();
    setEpisode(episode);
  };

  useEffect(() => {
    fetchEpisodeByURL(url);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <TableRow results={episode} />;
};

export default Episode;
