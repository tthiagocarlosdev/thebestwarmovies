import MovieList from "../components/MovieList";
import movies from "../components/movies"; // Certifique-se do caminho correto
import Header from "../components/Header";

const Movies = () => (
    <>
        <Header/>
        <MovieList movies={movies} />
    </>
);

export default Movies;