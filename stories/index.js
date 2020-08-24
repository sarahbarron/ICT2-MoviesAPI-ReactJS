import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import AddToFavoriteButton from "../src/components/buttons/addToFavorites";
import ReviewButton from "../src/components/buttons/addReview";
import MovieReview from "../src/components/movieReview";
import MovieReviews from "../src/components/movieReviews";
import ReviewForm from "../src/components/reviewForm";
import AuthForm from "../src/components/authForm";
import Login from "../src/components/login";
import Register from "../src/components/register";
import SearchForm from "../src/components/searchForm";
import CustomButton from "../src/components/buttons/customButton";
import TemplateAuthPage from "../src/components/templateAuthPage";
import TemplateMoviePage from "../src/components/templateMoviePage";
import CastCard from "../src/components/castCard";
import CastList from "../src/components/castList";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg",
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 28,
      name: "Action",
    },
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US",
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US",
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692,
};

const sampleReview = {
  id: "1234",
  author: "homer simpson",
  content: "this is a sample review to test the MovieReview component",
};

const sampleCast = {
  cast_id: 13,
  character: "Nina",
  credit_id: "52fe422ac3a36847f8009017",
  gender: 1,
  id: 650,
  name: "Karen Allen",
  order: 2,
  profile_path: "/hj1RlVnieS4jp9fKmiSirjKhA0a.jpg",
};

storiesOf("home page/movieCard", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={(movie) => (
        <button className="btn w-100 btn-primary">Test</button>
      )}
    />
  ))
  .add("movie undefined", () => (
    <MovieCard
      movie="undefined"
      action={(movie) => (
        <button className="btn w-100 btn-primary">Test</button>
      )}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={(movie) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("home page/filterControls", module)
  .addDecorator((story) => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ))
  .add("no parameters passed", () => <FilterControls />);

storiesOf("home page/headerMovieList", module)
  .add("default", () => <MoviesHeader title="All Movies" numMovies={10} />)
  .add("no parameters passed", () => <MoviesHeader />);

storiesOf("home page/movieList", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={(movie) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  })
  .add("empty movies array", () => {
    const movies = [];
    return (
      <MovieList
        movies={movies}
        action={(movie) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  })
  .add("undefined movies", () => {
    const movies = "undefined";
    return (
      <MovieList
        movies={movies}
        action={(movie) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("movie details page/movieDetails", module)
  .add("default", () => <MovieDetails movie={sample} />)
  .add("no movie passed", () => <MovieDetails />);

storiesOf("movie details page/movieHeader", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />)
  .add("no movie passed", () => <MovieHeader />);

storiesOf("movie details page/movieReviews", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const reviews = [sampleReview, sampleReview, sampleReview, sampleReview];
    return (
      <MovieReviews
        movie={sample}
        reviews={reviews}
        action={(review) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  })
  .add("No properties passed", () => {
    return <MovieReviews />;
  });

storiesOf("movie review page/movieReview", module)
  .add("default", () => <MovieReview review={sampleReview} />)
  .add("no review", () => <MovieReview />)
  .add("undefined review", () => <MovieReview review={"undefined"} />);

storiesOf("movie add movie review page/reviewForm")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <ReviewForm movie={sample} />;
  });

storiesOf("authentication/authForm")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("no parameters passed", () => {
    return <AuthForm />;
  })
  .add("login", () => {
    return (
      <AuthForm
        title="storeyboard title"
        buttonLabel="storeyboard Login"
        formType="login"
      />
    );
  })
  .add("register", () => {
    return (
      <AuthForm
        title="storeyboard title"
        buttonLabel="storeyboard Register"
        formType="register"
      />
    );
  })
  .add("no parameters passed", () => {
    return <AuthForm />;
  });
storiesOf("authentication/login")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <Login />;
  });

storiesOf("authentication/register")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <Register />;
  });

storiesOf("buttons/customButton")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <CustomButton className="btn btn-primary">Custom Button</CustomButton>
    );
  })
  .add("No text on button", () => {
    return <CustomButton className="btn btn-primary" />;
  });

storiesOf("buttons/addReview")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <ReviewButton movie={sample}></ReviewButton>;
  })
  .add("no parameters", () => {
    return <ReviewButton />;
  });
storiesOf("buttons/addToFavorites")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <AddToFavoriteButton
        movie={sample}
        type="button"
        className="btn w-100 btn-warning"
      >
        Favorite
      </AddToFavoriteButton>
    );
  })
  .add("no parameters", () => {
    return <AddToFavoriteButton />;
  });

storiesOf("search for movie page/searchForm")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <SearchForm />;
  });

storiesOf("template/templateAuthPage")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <TemplateAuthPage />;
  });

storiesOf("template/templateMoviePage")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <TemplateMoviePage movie={sample} />;
  })
  .add("undefined", () => {
    return <TemplateMoviePage movie={"undefined"} />;
  });

storiesOf("cast/castCard")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <CastCard
        cast={sampleCast}
        action={(movie) => (
          <button className="btn w-100 btn-primary">More Details ...</button>
        )}
      />
    );
  })
  .add("undefined", () => {
    return (
      <CastCard
        cast={"undefined"}
        action={(movie) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("cast/castList", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const cast = [sampleCast, sampleCast, sampleCast, sampleCast];
    return (
      <CastList
        movie={sample}
        action={(cast) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  })
  .add("No properties passed", () => {
    return <CastList />;
  })
  .add("cast undefined", () => {
    return (
      <CastList
        movie="undefined"
        action={(cast) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });
