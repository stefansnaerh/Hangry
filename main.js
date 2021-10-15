// $(window).load(function() {    

// 	var theWindow        = $(window),
// 	    $bg              = $("#bg"),
// 	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
// 	function resizeBg() {
		
// 		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
// 		    $bg
// 		    	.removeClass()
// 		    	.addClass('bgheight');
// 		} else {
// 		    $bg
// 		    	.removeClass()
// 		    	.addClass('bgwidth');
// 		}
					
// 	}
	                   			
// 	theWindow.resize(resizeBg).trigger("resize");

// });
// let h2 = document.querySelector('h2')
// let classes = (classes) => document.getElementsByClassName (classes);

// let breakfast = classes("backgroundImage1")
// let lunch = classes("backgroundImage3")
// let dinner = classes("backgroundImage2") 

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



// time();