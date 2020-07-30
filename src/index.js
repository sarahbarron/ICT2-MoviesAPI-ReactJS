import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoritesMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import AuthenticationPage from "./pages/authenticationPage";
import AuthContextProvider from "./contexts/authContext";
import PrivateRoute from "./routes/privateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="jumbotron">
          <SiteHeader /> {/* New Header  */}
          <div className="container-fluid">
            <MoviesContextProvider>
              <GenresContextProvider>
                <Switch>
                  <Route path="/authenticate" component={AuthenticationPage} />
                  <PrivateRoute
                    exact
                    path="/movies/favorites"
                    component={FavoriteMoviesPage}
                  />
                  <PrivateRoute
                    exact
                    path="/reviews/form"
                    component={AddMovieReviewPage}
                  />
                  <PrivateRoute
                    path="/reviews/:id"
                    component={MovieReviewPage}
                  />
                  <PrivateRoute path="/movies/:id" component={MoviePage} />
                  <PrivateRoute path="/" component={HomePage} />

                  <Redirect from="*" to="/" />
                </Switch>
              </GenresContextProvider>
            </MoviesContextProvider>
          </div>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
