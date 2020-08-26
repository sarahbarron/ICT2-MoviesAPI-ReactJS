import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Welcome from "../src/components/welcome";
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
import TemplateCastPage from "../src/components/templateCastPage";
import TemplateFavoriteCastPage from "../src/components/templateFavoriteCastPage";
import CastCard from "../src/components/castCard";
import CastCardList from "../src/components/castCardList";
import CastDetails from "../src/components/castDetails";
import CastHeader from "../src/components/headerCast";
import AddCastFavoriteButton from "../src/components/buttons/AddCastFavorites";
import FilterCastControls from "../src/components/filterCastControls";
import HeaderCastList from "../src/components/headerCastList";
import ViewPersonButton from "../src/components/buttons/viewPerson";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import CastContextProvider from "../src/contexts/castContext";
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

const samplePerson = {
  birthday: "1951-10-05",
  known_for_department: "Acting",
  deathday: null,
  id: 650,
  name: "Karen Allen",
  also_known_as: ["Karen Jane Allen "],
  gender: 1,
  biography:
    "From Wikipedia, the free encyclopedia.\n\nKaren Jane Allen (born October 5, 1951) is an American actress best known for her role as Marion Ravenwood in Raiders of the Lost Ark (1981) and Indiana Jones and the Kingdom of the Crystal Skull (2008).[1] Allen has also had roles in films including National Lampoon's Animal House (1978), The Wanderers (1979), Cruising (1980), Starman (1984), Scrooged (1988), The Sandlot (1993), and Poster Boy (2004).",
  popularity: 2.294,
  place_of_birth: "Carrollton, Illinois, USA",
  profile_path: "/hj1RlVnieS4jp9fKmiSirjKhA0a.jpg",
  adult: false,
  imdb_id: "nm0000261",
  homepage: "http://www.karenallen-fiberarts.com/",
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
  ));

storiesOf("home page/headerMovieList", module)
  .add("default", () => <MoviesHeader title="All Movies" numMovies={10} />)
  .add("exception", () => <MoviesHeader />);

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
  .add("No reviews", () => {
    return (
      <MovieReviews
        action={(review) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
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

storiesOf("authentication form/authForm")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
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

storiesOf("authentication/welcome")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <Welcome />;
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
  .add("no movie passed", () => {
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
  .add("no parameters passed", () => {
    return <AddToFavoriteButton />;
  });
storiesOf("buttons/addToCastFavorites")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <AddCastFavoriteButton person={samplePerson}>
        Favorite Cast
      </AddCastFavoriteButton>
    );
  })
  .add("no parameters passed", () => {
    return <AddCastFavoriteButton />;
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

storiesOf("template/templateCastPage")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <TemplateCastPage person={samplePerson} />;
  })
  .add("undefined", () => {
    return <TemplateCastPage person="undefined" />;
  });
storiesOf("template/templateFavoriteCastPage")
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const cast = [sampleCast, sampleCast, sampleCast];
    return (
      <TemplateFavoriteCastPage
        cast={cast}
        title="favorite"
        action={(person) => <ViewPersonButton person={person} />}
      />
    );
  })
  .add("empty cast array", () => {
    const cast = [];
    return (
      <TemplateFavoriteCastPage
        cast={cast}
        title="favorite"
        action={(person) => <ViewPersonButton person={person} />}
      />
    );
  });

storiesOf("cast favorite page/castCard")
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
  .add("undefined image", () => {
    const sampleNoPoster = { ...sampleCast, profile_path: undefined };
    return (
      <CastCard
        cast={sampleNoPoster}
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

storiesOf("cast favorite page/castCardList", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const cast = [sampleCast, sampleCast, sampleCast];
    return (
      <CastCardList
        cast={cast}
        action={(person) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  })
  .add("cast undefined", () => {
    const cast = undefined;
    return (
      <CastCardList
        cast={cast}
        action={(person) => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });
storiesOf("cast details page/castDetails", module)
  .add("default", () => <CastDetails person={samplePerson} />)
  .add("person undefined", () => <CastDetails person="undefined" />);

storiesOf("cast details page/castHeader", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <CastHeader person={samplePerson} />)
  .add("person undefined", () => <CastHeader person="undefined" />);

storiesOf("cast favorite page/filterCastControls", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <FilterCastControls onUserInput={action("button-click")} numCast={10} />
  ));
storiesOf("cast favorite page/headerCastList", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <HeaderCastList title="Cast Header" numCast={10} />)
  .add("No title", () => <HeaderCastList numCast={10} />)
  .add("No cast number", () => <HeaderCastList title="Cast Header" />)
  .add("No properties passed", () => <HeaderCastList />);

storiesOf("buttons/viewPersonButton", module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return <ViewPersonButton person={samplePerson} />;
  })
  .add("no parameters passed", () => {
    return <ViewPersonButton />;
  });
