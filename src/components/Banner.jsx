import React, { useState, useEffect } from "react";
import { requests, getImageUrl } from "../api";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(requests.fetchNetflixOriginals);
        const data = await response.json();
        const results = data.results;
        setMovie(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  if (!movie) return <div className="banner banner--loading">Loading...</div>;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${getImageUrl(movie.backdrop_path, "original")})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            ▶ Play
          </button>
          <button className="banner__button banner__button--info">
            ℹ More Info
          </button>
        </div>
        <p className="banner__description">
          {truncate(movie.overview, 150)}
        </p>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;