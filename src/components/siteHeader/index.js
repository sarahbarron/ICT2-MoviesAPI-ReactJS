import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { AuthContext } from "../../contexts/authContext";
import { GenresContext } from "../../contexts/genresContext";

const SiteHeader = () => {
  const context = useContext(AuthContext);
  const genresContext = useContext(GenresContext);
  let links;

  //  if the user is not authenticated only have a link to sign-in/registration
  if (context.user === null) {
    links = (
      <>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/authenticate">
            Sign-Up / Login
          </Link>
        </li>
      </>
    );
  }
  // otherwise the user is authenticated so include links to access all areas of the app
  else {
    links = (
      <>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/trending">
            Trending
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/upcoming">
            Upcoming
          </Link>
        </li>

        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle text-white"
            to="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Genres
          </Link>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            {genresContext.genres.map((genre) => {
              return (
                <Link
                  key={genre.id}
                  className="dropdown-item"
                  to={`/movies/genres/${genre.id}`}
                >
                  {genre.name}
                </Link>
              );
            })}
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/movies/favorites">
            Favorites
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/search">
            Search
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" onClick={context.logout} to="/">
            Logout
          </Link>
        </li>
      </>
    );
  }

  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            {links}
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default SiteHeader;
