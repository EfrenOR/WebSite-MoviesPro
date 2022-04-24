
//Get all Movies
const $movieBox = document.querySelectorAll('.box-movies-poster');

//Handler to display the element with info about the movie
const display = (element) =>{
  event.preventDefault();
  console.log(`Hola soy ${event.target}`)
  console.log(event)
  element.classList.add("display")
}

//Handler to hide the info about the movie
const hide = (element)=>{
  element.classList.remove("display")
}

//Events
//I added events to each movie with forEach
$movieBox.forEach((movie) => {
  movie.addEventListener('mouseenter', ()=>{
    display(movie.lastElementChild);//I passed parameters
  })
  movie.addEventListener('mouseleave', ()=>{
    hide(movie.lastElementChild)//I passed parameters
  })
});
