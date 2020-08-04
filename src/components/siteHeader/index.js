import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { AuthContext } from "../../contexts/authContext";

const SiteHeader = () => {
  const context = useContext(AuthContext);
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
        <li className="nav-item">
          <Link className="nav-link text-white" to="/movies/favorites">
            Favorites
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
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          {links}
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;
