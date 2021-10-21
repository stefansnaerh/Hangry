





// Here I call out the H2 element i want to change
let title = document.querySelector("h2") 


// get the hour of the day
let time = new Date().getHours();
// if its less then 10am then breakfast code runs
if (time < 10) {
title.innerHTML=("What's for breakfast?");
document.getElementById("morning").src="images/Startpage-Breakfast.png";
// if its less then 14 the lunch code runs
} else if (time < 14) {
    title.innerHTML=("What's for lunch?");
document.getElementById("morning").src="images/lunch.png";
// else dinner code runs
} else {
document.getElementById("morning").src="images/dinner.png";
title.innerHTML=("What's for dinner?");
};
 time();
