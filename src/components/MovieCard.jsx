const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <img
          src={movie.image}
          alt={`Poster de ${movie.title}`}
          className="movie-card__image"
        />
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}/5</p>
        <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
          Assistir trailer
        </a>
      </div>
    );
  };
  
  export default MovieCard;
  