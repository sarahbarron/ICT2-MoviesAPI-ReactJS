import React, { useContext } from "react";
import useForm from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { withRouter } from "react-router-dom";

const SearchForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const context = useContext(MoviesContext);

  const onSubmit = (input) => {
    context.loadSearchMovies(input.search);
  };

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Search For A Movie</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Movie Title"
          name="search"
          ref={register({ required: "Movie Title Required" })}
        />
      </div>
      {errors.search && <p className=" text-white">{errors.search.message} </p>}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default withRouter(SearchForm);
