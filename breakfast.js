
// STAR BUTTONS
//Spurja Smára hvort það sé ekki til betri leið, svo hægt sé að klikka á allar stjörnunar með einum JS kóða.

// MYND 1
const likeBtn = document.querySelector("#starButton");
let likeIcon = document.querySelector("#icon");
let count = document.querySelector("#count");

//button clicked
let clicked = false;

likeBtn.addEventListener("click", (e) => {
    if(!clicked) {
        clicked = true;
        likeIcon.innerHTML = `<ion-icon name="star" size="large"></ion-icon>`
        localStorage.setItem("card1", `
            <div class="container_breakfast">
                <div class="star-container">
                    <button id="starButton" class="rounded-button" type="button">
                        <span id="icon"> <ion-icon name="star-outline" size="large"></ion-icon> </span>
                    </button>
                </div>
                    <a href="#"> <img class="cardImage" src="images/chiaYogurt.jpg" alt="breakfast_card1"></a>
                        <card class="text">
                            <h4>Chia Yogurt</h4>
                            <p>8 min  |  179 kcal</p>
                        </card> 
            </div>`)
        count.textContent ++;
    }
    else{
        clicked = false;
        likeIcon.innerHTML = `<ion-icon name="star-outline" size="large"></ion-icon>`
        localStorage.removeItem("card1")
        count.textContent --;

    }
});

// MYND 2
const likeBtn2 = document.querySelector("#starButton2");
let likeIcon2 = document.querySelector("#icon2");
let count2 = document.querySelector("#count2");

likeBtn2.addEventListener("click", () => {
    if(!clicked) {
        clicked = true;
        likeIcon2.innerHTML = `<ion-icon name="star" size="large"></ion-icon>`
        localStorage.setItem("card2", `
            <div class="container_breakfast">
                <div class="star-container">
                    <button id="starButton2" class="rounded-button" type="button">
                        <span id="icon2"> <ion-icon name="star-outline" size="large"></ion-icon> </span>
                    </button>
            </div>
                <a href="#"> <img class="cardImage" src="images/Pancakes.jpg" alt="breakfast_card1"></a>
                    <card class="text">
                        <h4>ProteinPancakes</h4>
                        <p>30 min  |  112 kcal</p>
                    </card> 
            </div> `)
        count2.textContent ++;
    }
    else{
        clicked = false;
        likeIcon2.innerHTML = `<ion-icon name="star-outline" size="large"></ion-icon>`
        localStorage.removeItem("card2")
        count2.textContent --;

    }
});

// MYND 3
const likeBtn3 = document.querySelector("#starButton3");
let likeIcon3 = document.querySelector("#icon3");
let count3 = document.querySelector("#count3");

likeBtn3.addEventListener("click", () => {
    if(!clicked) {
        clicked = true;
        likeIcon3.innerHTML = `<ion-icon name="star" size="large"></ion-icon>`
        localStorage.setItem("card3", `
            <div class="container_breakfast">
                <div class="star-container">
                    <button id="starButton3" class="rounded-button" type="button">
                        <span id="icon3"> <ion-icon name="star-outline" size="large"></ion-icon> </span>
                    </button>
                </div>
                    <a href="#"> <img class="cardImage" src="images/frenchToast.jpg" alt="breakfast_card1"></a>
                        <card class="text">
                            <h4>French Toast</h4>
                            <p>20 min  |  115 kcal</p>
                        </card> 
            </div>`)
        count3.textContent ++;
    }
    else{
        clicked = false;
        likeIcon3.innerHTML = `<ion-icon name="star-outline" size="large"></ion-icon>`
        localStorage.removeItem("card3")
        count3.textContent --;

    }
});

// MYND 4
const likeBtn4 = document.querySelector("#starButton4");
let likeIcon4 = document.querySelector("#icon4");
let count4 = document.querySelector("#count4");

likeBtn4.addEventListener("click", () => {
    if(!clicked) {
        clicked = true;
        likeIcon4.innerHTML = `<ion-icon name="star" size="large"></ion-icon>`
        localStorage.setItem("card4", `
            <div class="container_breakfast">
                <div class="star-container">
                    <button id="starButton4" class="rounded-button" type="button">
                        <span id="icon4"> <ion-icon name="star-outline" size="large"></ion-icon> </span>
                    </button>
                </div>
                    <a href="#"> <img class="cardImage" src="images/eggMuffin.jpg" alt="breakfast_card1"></a>
                        <card class="text">
                            <h4>Egg Muffins</h4>
                            <p>35 min  |  297 kcal</p>
                        </card> 
                </div>`)
        count4.textContent ++;
    }
    else{
        clicked = false;
        likeIcon4.innerHTML = `<ion-icon name="star-outline" size="large"></ion-icon>`
        localStorage.removeItem("card4")
        count4.textContent --;

    }
});



