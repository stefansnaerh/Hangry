





// Here I call out the H2 element i want to change
let title = document.querySelector("h2") 



let time = new Date().getHours();
if (time < 10) {
title.innerHTML=("What's for breakfast?");
document.getElementById("morning").src="images/Startpage-Breakfast.png";
} else if (time < 14) {
    title.innerHTML=("What's for lunch?");
document.getElementById("morning").src="images/lunch.png";

} else {
document.getElementById("morning").src="images/dinner.png";
title.innerHTML=("What's for dinner?");
};
 time();
