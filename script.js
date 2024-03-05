const dropdownBtn = document.querySelectorAll(".btn");

dropdownBtn.forEach(link => {
  link.addEventListener('click',(e)=> {
    let element = e.target;

    const sousMenuContent = element.parentElement.children[2];
    const arrow = element.parentElement.children[1];

    arrow.classList.toggle('arrowUp');
    sousMenuContent.classList.toggle('show');

  })
})


/*pour le mobile*/



  const hamburger = document.querySelector(".hamburger");
  const navToggleShow = document.querySelector(".navToggle")
  const opacity = document.querySelector(".opacity")

 const navbarShow = () =>{
    hamburger.classList.toggle("open");
    navToggleShow.classList.toggle("show");
    opacity.classList.toggle("show");
/*    if navToggleShow.contains(open)*/
}

hamburger.addEventListener("click",navbarShow)