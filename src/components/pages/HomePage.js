import Card from "../molecules/Card";
import "./homePage.css";
import React, { useState, useEffect, useContext } from "react";
import Header from "../organisms/Header";
import Search from "../molecules/Search";
import Sort from "../molecules/Sort";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

function HomePage() {
  const { debounce, handleCardClick } = useContext(Context);
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${query}`
      );
      const data = await response.json();
      if (data) {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...(data.results || []),
        ]);
      }
      setHasMore(data.info && data.info.next !== null);
      setLoading(false);
    }

    if (hasMore && !loading) {
      fetchCharacters();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchCharacters = async () => {
    setLoading(true);
    setPage(1);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${query}`
    );
    const data = await response.json();
    const sortedCharacters =
      sortBy &&
      data.results &&
      data.results.sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy]);
      });

    setCharacters(sortedCharacters ? sortedCharacters : data.results);
    setHasMore(data.info && data.info.next !== null);
    setLoading(false);
  };

  const handleSearch = debounce(() => {
    searchCharacters();
  }, 1000);

  const handleChange = (event) => {
    const query = event.target.value;

    setQuery(query);
    event.preventDefault();
    handleSearch(query);
  };

  const handleSort = (event) => {
    const sortedCharacters = (characters ? [...characters] : []).sort(
      (a, b) => {
        return a[event.target.value].localeCompare(b[event.target.value]);
      }
    );
    const uniqueCharacters = [
      ...new Map(
        sortedCharacters ? sortedCharacters.map((item) => [item.id, item]) : []
      ).values(),
    ];
    setCharacters(uniqueCharacters);
    setSortBy(event.target.value);
  };

  return (
    <>
      <Header text={"Rick and Morty Characters"} />

      <div className="main-container">
        <div className="left-panel">
          <Search
            handleChange={handleChange}
            query={query}
            placeholder={"Search characters"}
          />
          <Sort handleSort={handleSort} sortValue={sortBy} />
        </div>
        <div className="main-content">
          <div className="character-cards-container">
            {characters ? (
              characters.map((character, index) => (
                <Link
                  key={index}
                  to={`/character/${character.id}`}
                  onClick={handleCardClick}
                >
                  <Card key={index} character={character} />
                </Link>
              ))
            ) : (
              <p>No character found</p>
            )}
          </div>
          {loading && characters && <p>Loading...</p>}
        </div>
      </div>
    </>
  );
}

export default HomePage;
