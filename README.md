# Project - ReactJS app.

**Name:** Sarah Barron

---

## Overview.

The concept of this project was to expand the Movie App for movie fans, where the main objectives were for a movie fan to:

- View a list of movies from different categories
- Save their favorite movies from any category to their favorite movies list
- View actors and actresses from a movie
- View other movies that this cast member has appeared in - Save a cast members to the users favorites cast list.
- Search for any movie of the users choice via the search form.

- Authentication page
  - Login
    - Form to allow email & password login via firebase
    - google authentication login via firebase
  - Register
    - Form to allow email & password registration via firebase
    - google authentication registration via firebase
    - User details stored in firestore database.
- Trending Movies
  - Display a list of Trending Movies.
  - Display details of a trending movie.
    - Display cast members of a trending movie
    - Display reviews of a trending movie
  - Add a trending movie to favorites
  - Add a review to a trending movie
- View upcoming movies
  - Display a list of upcoming Movies.
  - Display details of an upcoming movie.
    - Display cast members of an upcoming movie
    - Display reviews of an upcoming movie
  - Add an upcoming movie to favorites
  - Add a review to an upcoming movie
- View movies by genre - via a dropdown menu on the nav bar select a genre. Movies for this
  genre will be returned.
  - Display a list of the selected genre Movies.
  - Display details of the selected genre movie.
    - Display cast members of the selected genre movie
    - Display reviews of the selected genre movie
  - Add a selected genre movie to favorites
  - Add a review to the selected genre movie
- Search for a movie via a form
  - Display a list of movies returned in the search results.
  - Display details of a searched movie.
    - Display cast members of the searched movie
    - Display reviews of the searched movie
  - Add a searched movie to favorites
  - Add a review to the searched movie
- On the movie details page a second nested route view showing a list of cast members for a movie displayed in a table with the cast members image, details and a data hyperlinking button to view more details
- View a cast members further details with header, image and further details
- Nested route view of other movies that a cast member has appeared in, with a button link to view the movies details
- In the cast details page a user can add the cast member to favorite cast.
- Filter favorite cast members by name.
- Protected Routes added to favorite movies page, favorite cast page and adding a review page
  only authenticated users can view these 3 pages.
- Progammatic Navigation forces the navigation bar to use different links based on if the user is
  authenticated or not.

---

## Setup requirements.

### **Firebase setup**

---

firebase is needed for user authentication and storing of user information

- Create an account with [firebase](https://firebase.google.com/).
- Add Project
  - Give the project a name.
  - Create project.
- In the side menu click project overview

  - Click the </> web icon.
  - Give the app a name.
  - Register App.
  - In the firebase SDK snippet - Config, copy the firebaseConfig code.

  ![firebaseConfig](/public/readme/firebase-config.png)

- Back to the project in the root directory create a file called .env
- inside the .env file add the following copying the values from the firebaseConfig code
  in where highlighted

```
    REACT_APP_API_KEY= .... paste apiKey value here ....
    REACT_APP_AUTH_DOMAIN= .... paste authDomain value here ....
    REACT_APP_DB_URL=  .... paste databaseURL value here ....
    REACT_APP_PROJECT_ID= .... paste projectId value here ....
    REACT_APP_STORAGE_BUCKET= .... paste storageBucket value here ....
    REACT_APP_MESSAGING_SENDER_ID= .... paste messagingSenderId here ....
    REACT_APP_APP_ID= .... paste appId here ....
    REACT_APP_MEASUREMENT_ID= .... paste measurementId here ....
```

Open the .gitignore file and add `.env` to the end of the file

Within the project folder open a terminal window and run

- `npm install firebase`

### **TMDB Movie API**

---

In order to communicate with the TMDB movie api you need an API Key

- Register an account with
  [TMDB]('https://www.themoviedb.org/')
- Login into the account and click the 'API' link in the left sidebar. Copy the API key
- Back in our project folder, in the .env file you created earlier add the following

  - `REACT_APP_TMDB_KEY= .... paste your API key here ... `

### **Project Build and start**

---

Back in the terminal
`npm install`

To start the App
`npm start`

---

## API Data Model.

- Get today's trending movies

https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=2

```angular2
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
      "genre_ids": [
        28,
        27,
        53
      ],
      "id": 581392,
      "original_language": "ko",
      "original_title": "반도",
      "overview": "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
      "poster_path": "/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
      "release_date": "2020-07-15",
      "title": "Peninsula",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 84,
      "popularity": 88.22,
      "media_type": "movie"
    },
    {
      "id": 577922,
      "video": false,
      "vote_count": 187,
      "vote_average": 7.7,
      "title": "Tenet",
      "release_date": "2020-08-22",
      "original_language": "en",
      "original_title": "Tenet",
      "genre_ids": [
        28,
        53
      ],
      "backdrop_path": "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
      "adult": false,
      "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
      "popularity": 275.087,
      "media_type": "movie"
    },
    {
      "id": 539885,
      "video": false,
      "vote_count": 90,
      "vote_average": 6.5,
      "title": "Ava",
      "release_date": "2020-08-06",
      "original_language": "en",
      "original_title": "Ava",
      "genre_ids": [
        28,
        80,
        18,
        53
      ],
      "backdrop_path": "/ekkuqt9Q2ad1F7xq2ZONP0oq36P.jpg",
      "adult": false,
      "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
      "poster_path": "/A3z0KMLIEGL22mVrgaV7KDxKRmT.jpg",
      "popularity": 191.8,
      "media_type": "movie"
    },
    {
      "id": 414906,
      "video": false,
      "vote_count": 0,
      "vote_average": 0,
      "title": "The Batman",
      "release_date": "2021-09-29",
      "original_language": "en",
      "original_title": "The Batman",
      "genre_ids": [
        28,
        80,
        18
      ],
      "backdrop_path": "/4OMTpK9JAVHtdpaz5CvCV1kExt0.jpg",
      "adult": false,
      "overview": "Plot unknown.",
      "poster_path": "/y5XvGfELR5H1SASVdoWgwWfaFo2.jpg",
      "popularity": 61.547,
      "media_type": "movie"
    }
  ],
  "total_pages": 1000,
  "total_results": 20000
}
```

---

- Get upcoming movies

https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1

```angular2
{
  "results": [
    {
      "popularity": 275.087,
      "vote_count": 187,
      "video": false,
      "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
      "id": 577922,
      "adult": false,
      "backdrop_path": "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
      "original_language": "en",
      "original_title": "Tenet",
      "genre_ids": [
        28,
        53
      ],
      "title": "Tenet",
      "vote_average": 7.7,
      "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      "release_date": "2020-08-22"
    },
    {
      "popularity": 191.8,
      "vote_count": 90,
      "video": false,
      "poster_path": "/A3z0KMLIEGL22mVrgaV7KDxKRmT.jpg",
      "id": 539885,
      "adult": false,
      "backdrop_path": "/ekkuqt9Q2ad1F7xq2ZONP0oq36P.jpg",
      "original_language": "en",
      "original_title": "Ava",
      "genre_ids": [
        28,
        80,
        18,
        53
      ],
      "title": "Ava",
      "vote_average": 6.5,
      "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
      "release_date": "2020-08-06"
    },
    {
      "popularity": 23.042,
      "vote_count": 69,
      "video": false,
      "poster_path": "/kv78WJ2YvWyk3c32sbOGFh64xcs.jpg",
      "id": 510298,
      "adult": false,
      "backdrop_path": "/cdMfn0Jr9RGqKkaX9HyR5l1kiYy.jpg",
      "original_language": "en",
      "original_title": "Seberg",
      "genre_ids": [
        18,
        53
      ],
      "title": "Seberg",
      "vote_average": 5.8,
      "overview": "An ambitious young FBI agent is assigned to investigate iconic actress Jean Seberg when she becomes embroiled in the tumultuous civil rights movement in late 1960s Los Angeles.",
      "release_date": "2019-12-13"
    }
  ],
  "page": 1,
  "total_results": 230,
  "dates": {
    "maximum": "2020-09-22",
    "minimum": "2020-09-03"
  },
  "total_pages": 12
}
```

---

- Get movies by a selected Genre

https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}

```
{
  "page": 1,
  "total_results": 10000,
  "total_pages": 500,
  "results": [
    {
      "popularity": 134.549,
      "vote_count": 19430,
      "video": false,
      "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "id": 299536,
      "adult": false,
      "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Avengers: Infinity War",
      "vote_average": 8.3,
      "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      "release_date": "2018-04-25"
    },
    {
      "popularity": 64.76,
      "vote_count": 14756,
      "video": false,
      "poster_path": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      "id": 315635,
      "adult": false,
      "backdrop_path": "/lAsr1ytUq0ATWdCbcjf59pupPFy.jpg",
      "original_language": "en",
      "original_title": "Spider-Man: Homecoming",
      "genre_ids": [
        28,
        12,
        18,
        878
      ],
      "title": "Spider-Man: Homecoming",
      "vote_average": 7.4,
      "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
      "release_date": "2017-07-05"
    }
  ]
}
```

---

- Search for a movie

https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${input}&page=1&include_adult=false

```angular2
{
  "page": 1,
  "results": [
    {
      "id": 104909,
      "logo_path": null,
      "name": "Joker",
      "origin_country": "JP"
    },
    {
      "id": 84463,
      "logo_path": null,
      "name": "Joker Films",
      "origin_country": ""
    },
    {
      "id": 87324,
      "logo_path": null,
      "name": "Joker's Pack Productions",
      "origin_country": ""
    }
  ],
  "total_pages": 1,
  "total_results": 9
}
```

---

- Get movies cast members

https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}

```angular2
{
  "id": 122946,
  "cast": [
    {
      "cast_id": 1,
      "character": "L'Oiseau (voice)",
      "credit_id": "544636720e0a26634000a395",
      "gender": 2,
      "id": 24476,
      "name": "Pierre Brasseur",
      "order": 1,
      "profile_path": "/y9moezayXgiGbJWa9V1tFuljjc8.jpg"
    },
    {
      "cast_id": 2,
      "character": "La bergère (voice)",
      "credit_id": "5446367e0e0a2661c80019b4",
      "gender": 1,
      "id": 5682,
      "name": "Anouk Aimée",
      "order": 2,
      "profile_path": "/9pPY3jiJ79wQ5pvLqVqlTlPnkZ6.jpg"
    },
    {
      "cast_id": 3,
      "character": "Le ramoneur (voice)",
      "credit_id": "5446368cc3a36836d40017c9",
      "gender": 2,
      "id": 15137,
      "name": "Serge Reggiani",
      "order": 3,
      "profile_path": "/xbCKbmFWU2hSZHrHbyjmxyKjqHK.jpg"
    }
  ],
  "crew": [
    {
      "credit_id": "5d8bd7db79b3d4001f87688d",
      "department": "Sound",
      "gender": 0,
      "id": 10354,
      "job": "Sound Director",
      "name": "Antoine Archimbaud",
      "profile_path": null
    },
    {
      "credit_id": "5d8bd9ce326ec100201f44af",
      "department": "Sound",
      "gender": 2,
      "id": 11555,
      "job": "Songs",
      "name": "Joseph Kosma",
      "profile_path": "/iAAK4NE6sCyGvjsLe2sKuzqlxGt.jpg"
    },
    {
      "credit_id": "5d8bd890abf8e2000f788a83",
      "department": "Writing",
      "gender": 2,
      "id": 11555,
      "job": "Musical",
      "name": "Joseph Kosma",
      "profile_path": "/iAAK4NE6sCyGvjsLe2sKuzqlxGt.jpg"
    }
  ]
}
```

---

- View a single cast member

https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US

```angular2
{
  "birthday": "1951-10-05",
  "known_for_department": "Acting",
  "deathday": null,
  "id": 650,
  "name": "Karen Allen",
  "also_known_as": [
    "Karen Jane Allen "
  ],
  "gender": 1,
  "biography": "From Wikipedia, the free encyclopedia.\n\nKaren Jane Allen (born October 5, 1951) is an American actress best known for her role as Marion Ravenwood in Raiders of the Lost Ark (1981) and Indiana Jones and the Kingdom of the Crystal Skull (2008).[1] Allen has also had roles in films including National Lampoon's Animal House (1978), The Wanderers (1979), Cruising (1980), Starman (1984), Scrooged (1988), The Sandlot (1993), and Poster Boy (2004).",
  "popularity": 3.764,
  "place_of_birth": "Carrollton, Illinois, USA",
  "profile_path": "/hj1RlVnieS4jp9fKmiSirjKhA0a.jpg",
  "adult": false,
  "imdb_id": "nm0000261",
  "homepage": "http://www.karenallen-fiberarts.com/"
}
```

---

- Get the movies that an actor/actress appears in

https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US

```angular2
{
  "cast": [
    {
      "character": "Alexandra Barrie",
      "credit_id": "57996a74c3a36835600006a8",
      "release_date": "2004-06-06",
      "vote_count": 20,
      "video": false,
      "adult": false,
      "vote_average": 4.4,
      "title": "When Will I Be Loved",
      "genre_ids": [
        18,
        53,
        10749
      ],
      "original_language": "en",
      "original_title": "When Will I Be Loved",
      "popularity": 7.038,
      "id": 51363,
      "backdrop_path": null,
      "overview": "Feeling undervalued by her boyfriend, a young woman begins to explore her sexuality with other people.",
      "poster_path": "/wiSuxujHFBSeXUrZAc6z7fKmlcj.jpg"
    },
    {
      "character": "Katy",
      "credit_id": "52fe44acc3a36847f80a38f7",
      "release_date": "1978-07-27",
      "vote_count": 954,
      "video": false,
      "adult": false,
      "vote_average": 7.1,
      "title": "Animal House",
      "genre_ids": [
        35
      ],
      "original_language": "en",
      "original_title": "Animal House",
      "popularity": 10.868,
      "id": 8469,
      "backdrop_path": "/mJvnSmONfhzpfkqPDveEa2pcFPp.jpg",
      "overview": "At a 1962 College, Dean Vernon Wormer is determined to expel the entire Delta Tau Chi Fraternity, but those troublemakers have other plans for him.",
      "poster_path": "/fWooBbipMRIKeSRhEzmeaDV0T8H.jpg"
    },
    {
      "character": "Television Actor #2",
      "credit_id": "53a2d5af0e0a26228200153e",
      "poster_path": "/k4eT3EvfxW1L9Wmt04UqJqCvCR6.jpg",
      "id": 696,
      "video": false,
      "vote_count": 1535,
      "adult": false,
      "backdrop_path": "/odXPsc6GyLlAHa64orhAkpmYNLU.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "original_language": "en",
      "original_title": "Manhattan",
      "popularity": 12.528,
      "title": "Manhattan",
      "vote_average": 7.9,
      "overview": "Manhattan explores how the life of a middle-aged television writer dating a teenage girl is further complicated when he falls in love with his best friend's mistress.",
      "release_date": "1979-04-25"
    }
  ],
  "crew": [
    {
      "id": 475359,
      "department": "Directing",
      "original_language": "en",
      "original_title": "A Tree a Rock a Cloud",
      "job": "Director",
      "overview": "Set at a roadside café in the early morning in the Spring of 1947, a young boy and an older man meet by chance. The man relates a luminous tale of personal heartbreak and loss, and of his hard won understanding of the nature of love",
      "vote_count": 1,
      "video": false,
      "release_date": "2017-03-11",
      "vote_average": 9,
      "title": "A Tree a Rock a Cloud",
      "popularity": 0.97,
      "genre_ids": [
        18
      ],
      "backdrop_path": null,
      "adult": false,
      "poster_path": null,
      "credit_id": "59b7fb1f9251417e230003df"
    }
  ],
  "id": 650
}
```

---

## App Design.

---

### **Component catalogue.**

---

![storybook](/public/readme/storybook.png)

### **UI Design**

---

#### **Authentication View**

![Authentication](/public/readme/authentication-screen.png)

> Shows the authentication screen for login or register. User input is required.
> To Register the user must either enter their email address and password in the Register New Account form and press the Register Now button or alternatively they can click the Signin With Google button which will require the user to be authenticated by Google.  
> To Login the user must either enter their email address and password in the Login to Existing Account form and press the Login button or alternatively they can click the Signin With Google button which will require the user to be authenticated by Google.

---

#### **Authentication with Google**

![Authentication-with-google](/public/readme/google-auth.png)

> Shows when you click on the Signin with Google Button on the login/signup page a firebase popup appears allowing you to authenticate with your google account.

---

#### **Trending Movies View**

![trending](/public/readme/trending-movies.png)

> Shows the view for trending movies, A user can filter results by entering text into the list filtering input box or by choosing a genre from the drop down list. A user can click the add to favorites button to add a movie to their favorite list or a they can click on the image to view the movies details page

---

#### **Upcoming Movies View**

![upcoming](/public/readme/upcoming-movies.png)

> Shows the view for upcoming movies, A user can filter results by entering text into the list filtering input box or by choosing a genre from the drop down list. A user can click the add to favorites button to add a movie to their favorite list or a they can click on the image to view the movies details page

---

#### **Genre Movies View**

![genre](/public/readme/genre-movies.png)

> Shows the view when i click on the dropdown navigation a user can select any of the genres and a list of movies from that genre will be shown. A user can filter results by entering text into the list filtering input. A user can click the add to favorites button to add a movie to their favorite list or a they can click on the image to view the movies details page

---

#### **Search for a movie view**

![search](/public/readme/search-movies.png)

> Shows the view for the search for movies page. The user can input text to the search form input and movies are retrieved that relate to their input and listed. The user can filter results by inputting text into the title search input box or by genre by selecting a genre from the drop down list. A user can also click on the Add to favorites button to add the film to favorites or click on the image to view the films details

---

#### **Movie Details extended to include the show cast button**

![show-cast-button](/public/readme/movie-details-with-extended-show-cast-button.png)

> This shows the movies details view which i have extended with a nested route to show cast members. A user can view these by clicking on the show cast button.

---

#### **Cast List view**

![show-cast-list](/public/readme/movie-details-with-cast-list.png)

> This shows a movie details page after a user has clicked on the show cast button. The user can click on the hide cast button to return to just movie details or they can click on the more details button for any of the cast members to be routed to the cast members details.

---

#### **Single Cast Details View**

![cast-details](/public/readme/cast-details.png)

> This shows a cast members details. The user can click on the add to favorites button to add the cast member to their favorites list or they can click on the nested route button - view movies 'cast name' has appeared in to view a list of other films this cast member has appeared in.

---

#### **View to show movies a single cast member appeared in**

![cast-details-movies](/public/readme/cast-details-with-movies-appeared-in.png)

> This view shows the cast members details with the movies they have appeared in. The user can click on the hide movies button to return to the cast details view or they can click on the More details to view details of that movie.

---

#### **Favorite Cast View**

![cast-favorites](/public/readme/favorite-cast.png)

> This view shows a list of cast members that have been added to the users favorites list. They appear in a card and the user can click on the more details button in each card to view the details of the cast member or they can filter cast members by inputting the cast members name in the list filtering form.

---

### **Routing**.

---

**/authenticate** - authenticationPage - Displays the login / signup page

**/cast/favorites** - (Private Route) - favoriteCastPage Displays a list of the users favorite cast members

**/trending** - trendingMoviesPage - Displays a list of trending movies

**/upcoming** - upcomingMoviesPage - Displays a list of upcoming movies

**/movies/genres/:id** - genreMoviesPage - Displays a list of movies based on the genre the user has selected.

**/search** - searchForMoviePage - Displays a list of movies depending on users search results

**/person/:id** - castDetailsPage - Displays a single cast members details.

**/movies/\${id}/cast** - (Nested Route in the movieDetailsPage) - Displays a list of cast members for a movie.

**/person/:id/movies-appeared-in** - (Nested Route in the castDetailsPage) Displays a list of movies that a actor/actress has appeared in

**3 Private Routes:**

- /cast/favorites

- /movies/favorites

- /reviews/form

---

## React feature set.

---

- **useState hook** - src/components/castMovies/index.js
- **useEffect hook** - src/components/castMovies/index.js
- **useContext hook** - src/components/castList/index.js
- **useForm** - src/components/authForm/index.js
- **useReducer** - src/contexts/castContext.js
- **Custom hooks**
  - **usePerson** - src/hooks/usePerson.js
  - **useGenre** - src/hooks/useGenre.js
- **createContext** - src/contexts/authContext.js
- **Stateful components** -src/components/searchForm/index.js
- **Stateless components** - src/components/welcome/index.js
- **Unidirectional dataflow** - src/components/castCard/index.js
- **Data-down-action-up** - src/components/buttons/AddCastFavorites.js
- **Extended \<Link\>** - src/components/buttons/customLinkButton.js
- **Programmatic navigation**
  - **Declarative** - src/components/authForm/index.js
  - **Imperative** - src/pages/castDetailsPage
- **Nested routing** - src/pages/castDetailsPage.js
- **Parameterized routing** - index.js (/person/:id )
- **Composition**
  - **Container Pattern** - src/components/customButton.js
  - **Render Pattern** - src/pages/castDetailsPage.js
- **Provider Pattern** - src/contexts/castContext.js
- **memo** - src/components/authForm/index.js
- **storybook** - stories/index.js

---

## Independent learning.

---

### **Firebase**

#### **Authentication**

Allowed me to securely manage users authentication using their email addresses and passwords or google authentication to register or sign in.

### **Firestore**

This is firebases noSQL database where I am storing the users details.

#### **Source code**

- api - src/api/firebase-utils.js
- authentication context - src/contexts/authContext.js
- authentication forms - src/components/authForm/index.js

#### **references:**

- I did a follow on udemy course where firebase authentication and firestorm were covered
  https://www.udemy.com/course/complete-react-developer-zero-to-mastery/
- https://blog.logrocket.com/user-authentication-firebase-react-apps/
- https://firebase.google.com/docs/auth
- https://firebase.google.com/docs/firestore

---

### **Advanced Web Form processing using the useForms hook**

For the login form, register form and the search form I used the useForm hook

#### **Source Code:**

- src/components/authForm/index.js
- src/components/searchForm/index.js

#### **References:**

---

- Class tutorial
- https://react-hook-form.com/

### **Memoization**

I looked at memoization for my authForm as the google authentication popup menu was having performance issues it was taking a long time to load. However, I now feel that the problem is more to do with the firebase popup box than my react project. After going through the site I didn't feel there were any performance issues elsewhere so did not add the memo hook to any further pages.

#### **source code:**

- src/components/authForm/index.js

#### **Referances:**

- https://medium.com/@sdolidze/react-hooks-memoization-99a9a91c8853#:~:text=React.memo%20is%20a%20performance%20optimization%20tool%2C%20a%20higher,the%20component%2C%20and%20reuse%20the%20last%20rendered%20result.
- https://reactjs.org/docs/react-api.html#reactmemo

---

### **Cloud Deployment:**

I choose to deploy the website with Zeit Now as it hosts serverless APIs for free

#### **References:**

- https://create-react-app.dev/docs/deployment/
- https://vercel.com/docs
