
const starButton = document.querySelectorAll(".starButtonFav");
let starIcon = document.querySelectorAll("#starIcon");
let count = document.querySelectorAll("#count");

let clicked = false;

starButton[0].addEventListener("click", ()=>{
    if(!clicked) {
      clicked = true;
      starIcon[0].innerHTML = `<i class="fas fa-star star"></i>`;
      count[0].textContent ++;
    }
    else{
      clicked = false;
      starIcon[0].innerHTML = `<i class="far fa-star star"></i>`;
      count[0].textContent --;
    }
  }); 

  starButton[1].addEventListener("click", ()=>{
    if(!clicked) {
      clicked = true;
      starIcon[1].innerHTML = `<i class="fas fa-star star"></i>`;
      count[1].textContent ++;
    }
    else{
      clicked = false;
      starIcon[1].innerHTML = `<i class="far fa-star star"></i>`;
      count[1].textContent --;
    }
  }); 

  starButton[2].addEventListener("click", ()=>{
    if(!clicked) {
      clicked = true;
      starIcon[2].innerHTML = `<i class="fas fa-star star"></i>`;
      count[2].textContent ++;
    }
    else{
      clicked = false;
      starIcon[2].innerHTML = `<i class="far fa-star star"></i>`;
      count[2].textContent --;
    }
  }); 

  starButton[3].addEventListener("click", ()=>{
    if(!clicked) {
      clicked = true;
      starIcon[3].innerHTML = `<i class="fas fa-star star"></i>`;
      count[3].textContent ++;
    }
    else{
      clicked = false;
      starIcon[3].innerHTML = `<i class="far fa-star star"></i>`;
      count[3].textContent --;
    }
  }); 

  starButton[4].addEventListener("click", ()=>{
    if(!clicked) {
      clicked = true;
      starIcon[4].innerHTML = `<i class="fas fa-star star"></i>`;
      count[4].textContent ++;
    }
    else{
      clicked = false;
      starIcon[4].innerHTML = `<i class="far fa-star star"></i>`;
      count[4].textContent --;
    }
  }); 

  starButton[5].addEventListener("click", ()=>{
    if(!clicked) {
      clicked = true;
      starIcon[5].innerHTML = `<i class="fas fa-star star"></i>`;
      count[5].textContent ++;
    }
    else{
      clicked = false;
      starIcon[5].innerHTML = `<i class="far fa-star star"></i>`;
      count[5].textContent --;
    }
  }); 

  starButton[6].addEventListener("click", ()=>{
    if(!clicked) {
      clicked = true;
      starIcon[6].innerHTML = `<i class="fas fa-star star"></i>`;
      count[6].textContent ++;
    }
    else{
      clicked = false;
      starIcon[6].innerHTML = `<i class="far fa-star star"></i>`;
      count[6].textContent --;
    }
  }); 