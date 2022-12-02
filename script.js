const sousMenuDown = document.querySelector(".moreLink");
const arrow = document.querySelector(".arrow");
const sousMenu = document.querySelector("sousMenu");
const navbarRep = document.querySelector(".navToggle")

 sousMenuDown.addEventListener('click',()=>{
    event.preventDefault();
arrow.classList.toggle('arrowUp');
sousMenu.classList.toggle('show')
 })

 if (
    previousDropdownMenu !== null
  ) {
    const iconArrow = previousDropdownMenu
      .closest(".dropdown")
      .querySelector(".arrow");
    arrow.classList.remove("arrow-up");
  }