





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







// function whatTime (){
//     let date = new Date();
//     let timeNow = d.getHours();
//     if(timeNow < 10) {
//         lunch.remove();
//         dinner.remove();
//     }
//         else if (timeNow > 10 || timeNow < 15 ){
//             dinner.remove();
//             breakfast.remove();
//         }
//             else {
//                 breakfast.remove();
//                 lunch.remove();
//             }
// }
// window.onload = whatTime;




// let id = (id) => document.getElementById(id);
// let classes = (classes) => document.getElementsByClassName(classes);



// let lunch = getElementById('noon');
// let breakfast = getElementById('morning');
// let dinner = getElementById('night');


// let id = (id) => document.getElementById(id);
// let classes = (classes) => document.getElementsByClassName(classes);
// var removeImage = docoment.getElementById("container")



//let whatPic = (id, backgroundImage) => {
//  if ( whatTime > 10 ) {
//      breakfast[breakfast].style.opacity = "1";
//      lunch[].style.opacity = "0";
//      breakfast[serial].style.opacity = "0";
//  }
//      else if ( whatTime < 10 > 16) {
//          breakfast[serial].style.opacity = "0";
//          breakfast[serial].style.opacity = "1";
//          breakfast[serial].style.opacity = "0";
//      }
//      else {
//          breakfast[serial].style.opacity = "0";
//          breakfast[serial].style.opacity = "0";
//          breakfast[serial].style.opacity = "1";
//      }
//}

//whatPic ()