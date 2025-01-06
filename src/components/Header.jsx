import { Link } from "react-router-dom";

function Header (){
    return (
        <header>
            <h1>The Best War Movies</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Filmes</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;