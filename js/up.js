const up=()=>{
  window.scroll({
    top:0,
    behavior : 'smooth'
  })
}

export default function btnUp(div){
  let $btnUP = document.getElementById(div.slice(1));

  document.addEventListener('scroll', e=>{
    (scrollY > 1000)?$btnUP.classList.add('is-active'):$btnUP.classList.remove('is-active')
  })

  document.addEventListener('click', e=>{
    if(e.target === $btnUP || e.target.matches(`${[div]} *`))up()

  });
}
