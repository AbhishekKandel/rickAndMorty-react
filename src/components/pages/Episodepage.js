import { useState, useEffect, useContext } from "react";
import Header from "../organisms/Header";
import Pagination from "../molecules/Pagination";
import Table from "../organisms/table/Table";
import Search from "../molecules/Search";
import "./episodePage.css";
import { Context } from "../context/Context";

const EpisodePage = () => {
  const { debounce } = useContext(Context);
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const fetchEpisodes = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}&name=${searchQuery}`
    );
    const data = await response.json();
    setEpisodes([...(data.results || [])]);
    setTotalPages(data ? (data.info ? data.info.pages : 1) : 1);
  };

  useEffect(() => {
    fetchEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchQuery]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleSearch = () => {
    fetchEpisodes();
  };

  const searchEpisodes = debounce(() => {
    handleSearch();
  }, 1000);

  const handleChange = (event) => {
    const query = event.target.value;
    setPage(1);
    setSearchQuery(query);
    event.preventDefault();
    searchEpisodes(query);
  };

  return (
    <div>
      <Header text={"Episodes"} />
      <div className="episode-content">
        <div className="search-and-table">
          <Search
            handleChange={handleChange}
            query={searchQuery}
            placeholder={"Search episodes"}
          />
          {episodes.length ? (
            <Table data={episodes} />
          ) : (
            <p>No episode found</p>
          )}
        </div>
        {episodes.length ? (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default EpisodePage;
