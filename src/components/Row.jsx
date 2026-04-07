import React, { useState, useEffect } from "react";
import { getImageUrl } from "../api";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching row:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__poster--large"}`}
            src={getImageUrl(
              isLargeRow ? movie.poster_path : movie.backdrop_path
            )}
            alt={movie.name || movie.title}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;