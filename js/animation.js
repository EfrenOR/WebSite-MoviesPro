const $movieBox = document.querySelector('.box-movies-poster'),
    $moviesInfo = document.querySelector('.box-movies-info')


const display = (e) =>{
  e.preventDefault(e);
  console.log(`Hola soy ${e.target}`)
  console.log(e)
  $moviesInfo.classList.add("display")
}

const hide = (e)=>{
  $moviesInfo.classList.remove("display")
}

$movieBox.addEventListener('mouseenter', display)

$movieBox.addEventListener('mouseleave', hide)
