import React, { useEffect, useContext } from "react";
import "./castList.css";
import { getCast } from "../../api/tmdb-api";
import { CastContext } from "../../contexts/castContext";
import ViewPersonButton from "../../components/buttons/viewPerson";

export default ({ movie }) => {
  const context = useContext(CastContext);

  useEffect(() => {
    if (movie) {
      getCast(movie.id).then((cast) => {
        context.loadCast(cast);
      });
    }
  }, []);
  try {
    return context.cast !== null ? (
      <div>
        <table className="table table-striped table-bordered table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Details</th>
              <th scope="col">Links</th>
            </tr>
          </thead>
          <tbody>
            {context.cast.map((c) => {
              return (
                <tr key={c.id}>
                  <td>
                    <img
                      className="img-thumbnail cast-img"
                      alt={c.name}
                      // external link to add the image of the film if the cast members image is not available
                      src={
                        c.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${c.profile_path}`
                          : `/film-poster-placeholder.png`
                      }
                    />
                  </td>
                  <td>
                    <p>
                      <span className="cast-list-details">
                        Character Name :
                      </span>
                      {c.character}
                      <br />
                      <br />
                      <span className="cast-list-details">Actor Name :</span>
                      {c.name}
                      <br />
                      <br />
                      <span className="cast-list-details">
                        Appearance Order :
                      </span>{" "}
                      {c.order + 1}
                      <br />
                      <br />
                    </p>
                  </td>
                  <td>
                    <ViewPersonButton person={c} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    ) : (
      <p>Waiting for movie details</p>
    );
  } catch (e) {
    console.log("Error retrieving cast: ", e);
    return <div className="error-msg">Error retrieving cast members</div>;
  }
};
