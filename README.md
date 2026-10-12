# What I built and why
I have created a film recommendation system, as I love watching films and a problem I come across is when I want to watch a film but there is either too much choice or the recommendations you recieve from a platform like a streaming service are limited to the films available on there. That's why I developed this film recommendation system in which the user is able to input up to 4 films they have seen recently or otherwise and retrieve a list of 5 similar/related films that they might like to watch next. This is a web app that uses Node.js Express within the backend and Vue for the frontend.

![Example screenshot](/Example%20screenshot.png)

# How to run it
To run the web app you need to install Node.js and have npm installed *(npm is included with the Node.js installation)*:\
https://nodejs.org/en/download

You also need an API key for TMDB (The Movie Database) which you can get from here *(An account is required but it's free to use for small projects such as this)*:\
https://www.themoviedb.org/settings/api

The correct API key for you to use for this is the one labelled **API Read Access Token** on the above webpage.

## Within the backend folder of the repository
Create a file named `.env`

Open .env in a text editor such as Notepad or within your IDE and within it write *(Where abc123 is replaced with your API Read Access Token)*:\
`TMDB_KEY=abc123`

Run:
```
npm install
node server.js
```

Keep the backend terminal open and running while also running the frontend server in a separate terminal.

To verify that your API key is being read by the server, when server.js is run you will see this within the output:\
`◇ injected env (1) from .env`

## Within the frontend folder of the repository
Run:
```
npm install
npm run build
npm run preview
```
Then navigate to the port on localhost that is shown on a web browser.

### If you want to run the tests for the frontend:
Run `npm run test:unit`

# How it works

The web app itself relies on the TMDB API for the majority of its functionality. Where the backend server is making calls to this API for the frontend to get the information it needs.

Firstly the user needs to type a film name into one of the search boxes and press search. Once they have done that the frontend makes a request to the backend to call the TMDB API and search for films using given name by the user in the search box. Where a list of films is then given back by the TMDB API and the backend gives these films to the frontend where they are then displayed for the user to choose the specific film they are looking for by clicking on a button.

When the user has selected at least one film, they can then click the "Get recommendations" button. This button sends another request to the backend server which uses TMDB's built-in recommendation API route which gives back a list of films similar to the given film and sends these back to the frontend. It does this for every film given in the search boxes, where it compiles all of the recommended films from all searches into a list. This list of recommended films (There are around 20 recommendations per searched film) is then shuffled and the first 5 films are displayed at the bottom of the page for the user to see.

Only 5 films are shown to not overwhelm the user with too much choice and clutter the page, but you can click the "Get recommendations" button again and the process repeats, where the list is shuffled again and another 5 random films are displayed, replacing the previous recommendations.

# What I would improve with more time

If I were to work on this further with more time I would make a few additions and improvements:
* Improve upon CSS styling so that someone could view the site on a phone or a smaller window as currently the elements do not take this into account.
* A better testing pipeline as currently there are only 2 small tests within the system for the frontend. The testing pipeline would need to check if the TMDB API successfully works/connects within the backend. Testing if the frontend is able to successfully connect to the backend and display the correct results for both search and recommendations. As well as if the recommended films all display their information correctly on the page.
* Adding semantic tagging into HTML code as currently the HTML code mainly uses `<div>` to display the elements in the page.
* Adding error/loading messages for the backend API calls, as currently when the either the search or recommend button is clicked there is no feedback to the user until the data from the API has been retrieved and displayed, so if the frontend cannot connect to the backend or the TMDB API, nothing happens on the page which could make the search/recommend button appear to be not functioning.