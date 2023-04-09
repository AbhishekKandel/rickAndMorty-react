import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EpisodePage from "./components/pages/Episodepage";
import HomePage from "./components/pages/HomePage";
import CharacterDetail from "./components/pages/CharacterDetail";
import EpisodeDetail from "./components/pages/EpisodeDetail";
import ContextProvider from "./components/context/Context";
import FavoritesPage from "./components/pages/FavoritesPage";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/EpisodesPage" element={<EpisodePage />} />
          <Route path="/FavoritesPage" element={<FavoritesPage />} />
          <Route exact path="/character/:id" element={<CharacterDetail />} />
          <Route exact path="/episode/:id" element={<EpisodeDetail />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
