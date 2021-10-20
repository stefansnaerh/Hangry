const likeBtns = document.querySelectorAll(".rounded-button");

// MYND 1
//const likeBtn = document.querySelector("#starButton"); 
let likeIcon = document.querySelector("#icon");
//let count = document.querySelector("#count");
const favorites = []
//button clicked
//let clicked = false;
likeBtns.forEach((likeBtn)=> {
    likeBtn.addEventListener("click", (e) => {
        const likeIcon = likeBtn.querySelector("span")
        console.log (e.target)
        const clicked = e.target.name==="star"
        if(!clicked) {
            favorites.push(likeBtn.parentElement.parentElement)
            //clicked = true;
            likeIcon.innerHTML = `<ion-icon name="star" size="large"></ion-icon>`
            localStorage.setItem("favorites", JSON.stringify(favorites))
            //count.textContent ++;
        }
        else{
            clicked = false;
            likeIcon.innerHTML = `<ion-icon name="star-outline" size="large"></ion-icon>`
            localStorage.removeItem("")
            //count.textContent --;
    
        }
    });
}) 