
export default function carousel(){

  //I added a small script to control the imagen slider so with this the images can move itself -->
  let counter = 1;

  /*This is to get the position of the imagen when the user click on some label
  to continue with the moving of the imagens*/
  let getPosition = document.querySelector('.btn1')
  getPosition.addEventListener('click', ()=>{
    counter = 1;
  })

  getPosition = document.querySelector('.btn2')
  getPosition.addEventListener('click', ()=>{
    counter = 2;
  })

  getPosition = document.querySelector('.btn3')
  getPosition.addEventListener('click', ()=>{
    counter = 3;
  })

  getPosition = document.querySelector('.btn4')
  getPosition.addEventListener('click', ()=>{
    counter = 4;
  })

  /*With this I can select each label with id = radio + number and set it a checked=true
  to display each imagen*/
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 4000);  
}
