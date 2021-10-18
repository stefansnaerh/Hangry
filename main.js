

// let classes = (classes) => document.getElementsByClassName (classes);

// let breakfast = classes("backgroundImage1"),
//  lunch = classes("backgroundImage3"),
//  dinner = classes("backgroundImage2"),
//  greeting = classes("morning");

// let time = new Date().getHours();
// if (time < 1) {
//     breakfast.style.opacity = 1;
// 	h2.innerHTML = "What's for breakfast?"
// } else if (time < 11) {
//     breakfast.style.opacity = 0;
// 	lunch.style.opacity = 1;
// 	h2.innerHTML = "What's for lunch?"
// } else {
//     breakfast.style.opacity = 0;
// 	dinner.style.opacity = 1;
// 	lunch.style.opacity = 0;
// 	h2.innerHTML = "What's for dinner?"
// }
// console.log(time)



// time();

// let currenTime = new Date().getHours();
// if (currenTime < 10) {
//     document.
// };



let title = document.querySelector("h2") 

let time = new Date().getHours();
if (time < 10) {
title.innerHTML=("What's for breakfast?");
} else if (time < 14) {
    title.innerHTML=("What's for lunch?");
} else {
    title.innerHTML=("What's for dinner?")
};
 time();
// let backgroundImage = document.getElementById("#morning")
// let title = document.querySelector("h2") 

// let time = new Date().getHours();
// if (time < 23) {
//     title.innerHTML=("What's for breakfast?");
//     document.body.style.backgroundImage = "url('images/Startpage-Breakfast.png')"

// } else if (time < 14) {
//     title.innerHTML=("What's for lunch?");
//     backgroundImage.innerHTML= `<img src="images/lunch.png" class="backgroundImageBreakfast" alt="" id="morning">`
    
// } else {
//     title.innerHTML=("What's for dinner?");
//     backgroundImage.innerHTML=`<img src="images/dinner.png" class="backgroundImageBreakfast" alt="" id="morning"></img>`
    
// };
//  time();