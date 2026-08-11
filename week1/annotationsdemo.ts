let movieTitle:string="Mukunda";
let releaseYear:number=2014;
let ishit:boolean=true;
function getMovieStatus(title:string,year:number):string{
    return `${title} was a massive hit released in ${year}.`;
}
let actors:string[]=["varuntej","poojahegde"];
const summary:string=getMovieStatus(movieTitle,releaseYear);
console.log(summary);
console.log(`Starring:${actors.join(", ")}`);
console.log(`Is it a blockbuster?${ishit?"Yes" :"No"}`);
