let classes = (classes) => document.getElementsByClassName(classes);

let cards = classes(".container_breakfast"),
favButton = classes(".starButton");

favButton.addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("cards", 
                        ` <img class="starButton" src="images/myfeedlike.png" alt="star_rate_button">
                        <a href="#"> <img class="cardImage" src="images/pic3.png" alt="breakfast_card1"></a>
                        <card class="text">
                            <h4>Salmon salad</h4>
                            <p>20 min  |  200 kcal</p>
                        </card> `)
    star[0].style.backgroundcolor = "#FFF4CD";
  })