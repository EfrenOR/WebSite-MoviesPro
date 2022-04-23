
//Parent Element
const $sectionMovies = document.querySelector(".section-movies-horror")

//Object with movies
const moviesList = [
  {
    title : "Don't Breathe 2",
    img : "Don't Breathe 2.jpg"
  },
  {
    title: "Us",
    img: "US.jpg",
  },
  {
    title: "A Quite Place Part II",
    img : "QuitePlace.jpg"
  },
  {
    title: "Midsommar",
    img : "Midsommar.jpg"
  }
]

//Set the title of the section "HORROR"
$sectionMovies.firstElementChild.querySelector("span").textContent = "HORROR";

//Parent Element of each element <article></article>
const $sectionMoviesFlex = $sectionMovies.querySelector(".flex")


//Create the cards for the movies/////

//Create Elements
const $cardsMovies = document.createElement("article"),
      $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $titleMovie = document.createElement("h3");

$cardsMovies.classList.add("box-movies-horror") //Set a class

$img.setAttribute("src", `img/${moviesList[0].img}`)
$figure.appendChild($img)
$cardsMovies.appendChild($figure)

$titleMovie.textContent = moviesList[0].title;
$cardsMovies.appendChild($titleMovie)

//Append each $cardsMovies to the Parent Element
$sectionMoviesFlex.appendChild($cardsMovies)












//
