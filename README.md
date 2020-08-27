# Project - ReactJS app.

Name: ... Sarah Barron ...

## Overview.

The concept of this project was to create an APP for movies fans, where the main objectives were for a movie fan to be able to view movies from different categories, save their favorite movies, view actors and actresses from a movie and save favorite cast members. The user can also search for any movie of their choice via the search form.

- View trending movies
- View upcoming movies
- View movies by genre - by selecting from the navigation bar drop down menu of genres
- Search for a movie via a search form
- Extended save to favorites for trending, upcoming, genre, and searched for movies.
- View cast members for any movie
- Add cast members to favorite cast
- View extended details of a cast member
- View other films that a cast member has appeared in.

## Setup requirements.

...... Insert a brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

## API Data Model.

..... [For projects that did not expand the Movies Fan app] Insert a diagram of API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For projects that expanded the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your components' stories. [For projects that expanded the Movies app, hi-light stories relating to new/modified components - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views (see example below) with appropriate captions (For extension to the Movies Fan App, only show the new/modified views) ........

![][view]

> Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. For projects that expanded the Movies Fan app, only new routes should be listed .........

- /blogs - displays all published blogs.
- /blogs/:id (private) - detail view of a particular blog.
- /blogs/:id/comments (private) - detail view of a particular blog and its comments.
- etc.
- etc.

## React feature set.

..... Insert a bullet-point list of the React features used in your project, including one source code file references for each - see examples below ......

- useState and useEffect hooks - src/components/fileA.js
- useContext hook - src/components/fileb.js
- Extended Link - src/components/fileA.js
- Programmatic navigation - src/pages/fileC.js
- etc
- etc
- etc

## Independent learning.

. . . . . Briefly state the technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include source material references (articles/blogs) .........

[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png
