"use strict";
let movieTitle = "Mukunda";
let releaseYear = 2014;
let ishit = true;
function getMovieStatus(title, year) {
    return `${title} was a massive hit released in ${year}.`;
}
let actors = ["varuntej", "poojahegde"];
const summary = getMovieStatus(movieTitle, releaseYear);
console.log(summary);
console.log(`Starring:${actors.join(", ")}`);
console.log(`Is it a blockbuster?${ishit ? "Yes" : "No"}`);
