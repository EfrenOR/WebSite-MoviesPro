
export default function animation(){

  //Get all Movies
  const $movieBox = document.querySelectorAll('.box-movies-container');

  //Handler to display the element with info about the movie
  const display = (element) =>{
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
      display(movie.querySelector('.box-movies-poster').lastElementChild);//I passed parameters
    })
    movie.addEventListener('mouseleave', ()=>{
      hide(movie.querySelector('.box-movies-poster').lastElementChild)//I passed parameters
    })
  });
  
}
