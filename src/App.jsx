import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//2d87fd95

import { useEffect, useState } from "react";

const API_URl = "http://www.omdbapi.com?apikey=2d87fd95";

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);

  const [search,setSearch]=useState([])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('batman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={SearchIcon} alt="Search" onClick={()=>searchMovies(search)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={Math.random
            ()} movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}

    </div>
  );
}

export default App;
