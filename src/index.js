import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "popper.js";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoritesMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import GenreMoviesPage from "./pages/genreMoviesPage";
import SearchForMoviePage from "./pages/searchForMoviePage";
import AuthenticationPage from "./pages/authenticationPage";
import CastDetailsPage from "./pages/castDetailsPage";
import FavoriteCastPage from "./pages/favoriteCastPage";
import AuthContextProvider from "./contexts/authContext";
import CastContextProvider from "./contexts/castContext";
import PrivateRoute from "./routes/privateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GenresContextProvider>
          <div id="background-img" className="jumbotron">
            <SiteHeader /> {/* New Header  */}
            <div className="container-fluid">
              <MoviesContextProvider>
                <CastContextProvider>
                  <Switch>
                    <Route
                      path="/authenticate"
                      component={AuthenticationPage}
                    />

                    <PrivateRoute
                      exact
                      path="/movies/favorites"
                      component={FavoriteMoviesPage}
                    />
                    <PrivateRoute
                      exact
                      path="/cast/favorites"
                      component={FavoriteCastPage}
                    />
                    <PrivateRoute
                      exact
                      path="/reviews/form"
                      component={AddMovieReviewPage}
                    />
                    <Route path="/reviews/:id" component={MovieReviewPage} />

                    <Route path="/trending" component={TrendingMoviesPage} />
                    <Route path="/upcoming" component={UpcomingMoviesPage} />
                    <Route
                      path="/movies/genres/:id"
                      component={GenreMoviesPage}
                    />
                    <Route path="/search" component={SearchForMoviePage} />
                    <Route path="/movies/:id" component={MoviePage} />
                    <Route path="/person/:id" component={CastDetailsPage} />
                    <Route exact path="/" component={HomePage} />

                    <Redirect from="*" to="/" />
                  </Switch>
                </CastContextProvider>
              </MoviesContextProvider>
            </div>
          </div>
        </GenresContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
