
const starButton = document.querySelector(".starButtonFav");
const unclicked = document.querySelector(".starOff");
const clicked = document.querySelector(".starOn");

starButton[0].addEventListener("click", (e)=>{
    e.preventDefault();
    clicked[0].style.display = "initial";
    unclicked[0].style.display = "none";
  })