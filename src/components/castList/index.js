import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCast } from "../../api/tmdb-api";
import "./castList.css";

export default ({ movie }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function loadCast() {
      const cast = await getCast(movie.id);
      console.log("useEffect getCast: ", cast);
      setCast(cast);
    }
    loadCast();
  }, []);

  try {
    return (
      <div>
        <table className="table table-striped table-bordered table-hover table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Character Name</th>
              <th scope="col">Real Name</th>
              <th scope="col">Order of Appearance</th>
            </tr>
          </thead>
          <tbody>
            {cast.map((c) => {
              return (
                <tr key={c.id}>
                  <td>
                    <img
                      className="img-thumbnail cast-img"
                      alt={c.name}
                      src={
                        c.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${c.profile_path}`
                          : "./film-poster-placeholder.png"
                      }
                    />
                  </td>
                  <td>{c.character}</td>
                  <td>{c.name}</td>
                  <td>{c.order}</td>
                  <td>
                    {" "}
                    <Link
                      to={{
                        pathname: `/people/${c.id}`,
                        state: {
                          cast: c,
                          movie: movie,
                        },
                      }}
                    >
                      More Details ...
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } catch (e) {
    console.log("Error retrieving cast: ", e);
    return <div className="error-msg">Error retrieving cast members</div>;
  }
};
