//Object with movies
const moviesList = [
  {
    title : "Don't Breathe 2",
    category : "Horror",
    img : "Don't Breathe 2.jpg",
    site : "https://www.themoviedb.org/movie/482373-don-t-breathe-2?language=es-es",
    top : false,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  },
  {
    title: "Us",
    category : "Horror",
    img: "US.jpg",
    site : "https://www.themoviedb.org/movie/458723-us?language=es-es",
    top : true,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  },
  {
    title: "A Quite Place Part II",
    category : "Horror",
    img : "QuitePlace.jpg",
    site : "https://www.themoviedb.org/movie/520763-a-quiet-place-2?language=es-es",
    top : true,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  },
  {
    title: "Midsommar",
    category : "Horror",
    img : "Midsommar.jpg",
    site : "https://www.themoviedb.org/movie/530385-midsommar?language=es-es",
    top : true,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  },
  {
    title: "Toy Story 4",
    category : "Fantasy",
    img: "ToyStory4.jpg",
    site : "https://www.themoviedb.org/movie/301528-toy-story-4?language=es-es",
    top : false,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  },
  {
    title: "Pirates Caribbean",
    category : "Fantasy",
    img : "PiratesCaribbean.jpg",
    site : "https://www.themoviedb.org/movie/166426-pirates-of-the-caribbean-dead-men-tell-no-tales?language=es-es",
    top : true,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  },
  {
    title: "Alice in Wonderland",
    category : "Fantasy",
    img : "AliceWonderland.jpg",
    site : "https://www.themoviedb.org/movie/12155-alice-in-wonderland?language=es-es",
    top : false,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  },
  {
    title: "Abominable",
    category : "Fantasy",
    img : "Abominable.jpg",
    site : "https://www.themoviedb.org/movie/431580-abominable?language=es-es",
    top : false,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  },
  {
    title:"Moonfall",
    category : "Action",
    img : "Moonfall.jpg",
    site : "https://www.themoviedb.org/movie/406759-moonfall?language=es-es",
    top : false,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  },
  {
    title : "Batman",
    category : "Action",
    img : "Batman.jpg",
    site : "https://www.themoviedb.org/movie/414906-the-batman?language=es-es",
    top : true,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  },
  {
    title : "BlackLight",
    category : "Action",
    img : "BlackLight.jpg",
    site : "https://www.themoviedb.org/movie/823625-blacklight?language=es-es",
    top : true,
    raking : 7.8,
    sinopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing, consectetur adipisicing"
  }
]

/*With for and forEach() I created each cardsMovies of my object moviesList*/
//Edit: I used fragments and template element to optimize the website

//Get the template
const $templateMovies = document.getElementById("cardsMovies").content;
//Create the fragments
const $fragmentMovies = document.createDocumentFragment();
const $fragmentMoviesTop = document.createDocumentFragment();

let claseCategory;/*To store the category of each movie and use it to call
  the section element with its class and append the Movies there
*/

let claseTop = false;//To know when a movie is top

/*This is to store each category of the movies and I used Set()
because doesn't accept replays*/
let categories = new Set();

moviesList.forEach((movie) => {//I stored each category in the categories variable of type set()
  categories.add(movie.category)
});

/*I converted the categories variable above to Array, i did that because
  I needed to access the values with their specific position
*/
let categoriesArray = Array.from(categories);

//Create each movie which is an <article> element in the HTML
for (let i = 0; i <categoriesArray.length; i++) {
  let position = i;
  moviesList.forEach((movie)=>{

    //This conditional is for put the "Top Movies"
    if(movie.category == categoriesArray[position] && movie.top == true){
      claseTop = true;//This is my flag variable

      //I set each Attribute of my elements inside $templateMovies
      $templateMovies.querySelector("a").setAttribute("href", movie.site);
      $templateMovies.querySelector("img").setAttribute("src", `img/${movie.img}`);
      $templateMovies.querySelector("img").setAttribute("alt", movie.title);
      $templateMovies.querySelector("h3").textContent = movie.title;
      $templateMovies.getElementById('Sinopsis').textContent = movie.sinopsis;
      $templateMovies.getElementById('Ranking').textContent = movie.raking

      //I cloned the template to be able using it in other occasions
      let $cloneTemplate = document.importNode($templateMovies, true)

      //And I add the $cloneTemplate to the created $fragmentMoviesTop
      $fragmentMoviesTop.appendChild($cloneTemplate)
    }

    //This is to put all movies depending on their category
    if(movie.category == categoriesArray[position]){
      claseCategory = movie.category//This stores the class depending on the category
      $templateMovies.querySelector("a").setAttribute("href", movie.site);
      $templateMovies.querySelector("img").setAttribute("src", `img/${movie.img}`);
      $templateMovies.querySelector("img").setAttribute("alt", movie.title);
      $templateMovies.querySelector("h3").textContent = movie.title;
      $templateMovies.getElementById('Sinopsis').textContent = movie.sinopsis;
      $templateMovies.getElementById('Ranking').textContent = movie.raking
      let $cloneTemplate = document.importNode($templateMovies, true)

      $fragmentMovies.appendChild($cloneTemplate)
    }
  })

  /*I get the section depending on the category for this I need to use the created
  claseCategory variable above
  */
  const $sectionMovies = document.getElementsByClassName(`section-movies-${claseCategory}`)[0]

  /*This conditional is to detect when a movies is "TOP" I need to use the flag
    variable -> claseTop*/
  if(claseTop == true){
    const $sectionMoviesTop = document.getElementsByClassName(`section-movies-Top`)[0]

    //I add the $fragmentMoviesTop inside $sectionMoviesTop
    $sectionMoviesTop.querySelector(".flex").append($fragmentMoviesTop);
  }

  //I add the $fragmentMovies inside $sectionMovies depending on the category
  $sectionMovies.querySelector(".flex").append($fragmentMovies);

}

let $btnUP = document.getElementById("btnUp");

const up=()=>{
  window.scroll({
    top:0,
    behavior : 'smooth'
  })
}

$btnUP.addEventListener("click", up);
console.log($btnUP)


// Jair Efren Ortega Reyes
//
