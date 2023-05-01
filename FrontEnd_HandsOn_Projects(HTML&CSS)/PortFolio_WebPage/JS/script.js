/*var about = document.getElementById('n-about');
about.addEventListener('click', function(){
	var targetPos = 2050;
    var currentPos = 0;

    var scrollval = setInterval(function(){
	    if(currentPos >= targetPos){
		    clearInterval(scrollval);
		    return;
	    }
	    else{
		    currentPos += 50;
		    scrollBy(0, 50);
	    }
    }, 50);
});

var skills = document.getElementById('n-skills');
skills.addEventListener('click', function(){
	var targetPos = 4700;
    var currentPos = 0;

    var scrollval = setInterval(function(){
	    if(currentPos >= targetPos){
		    clearInterval(scrollval);
		    return;
	    }
	    else{
		    currentPos += 50;
		    scrollBy(0, 50);
	    }
    }, 50);
});

var experience = document.getElementById('n-experience');
experience.addEventListener('click', function(){
	var targetPos = 6700;
    var currentPos = 0;

    var scrollval = setInterval(function(){
	    if(currentPos >= targetPos){
		    clearInterval(scrollval);
		    return;
	    }
	    else{
		    currentPos += 50;
		    scrollBy(0, 50);
	    }
    }, 50);
});


var education = document.getElementById('n-education');
education.addEventListener('click', function(){
	var targetPos = 12000;
    var currentPos = 0;

    var scrollval = setInterval(function(){
	    if(currentPos >= targetPos){
		    clearInterval(scrollval);
		    return;
	    }
	    else{
		    currentPos += 50;
		    scrollBy(0, 50);
	    }
    }, 50);
});


var portfolio = document.getElementById('n-portfolio');
portfolio.addEventListener('click', function(){
	var targetPos = 17000;
    var currentPos = 0;

    var scrollval = setInterval(function(){
	    if(currentPos >= targetPos){
		    clearInterval(scrollval);
		    return;
	    }
	    else{
		    currentPos += 50;
		    scrollBy(0, 50);
	    }
    }, 50);
});


var contact = document.getElementById('n-contact');
contact.addEventListener('click', function(){
	var targetPos = 29000;
    var currentPos = 0;

    var scrollval = setInterval(function(){
	    if(currentPos >= targetPos){
		    clearInterval(scrollval);
		    return;
	    }
	    else{
		    currentPos += 50;
		    scrollBy(0, 50);
	    }
    }, 50);
}); */


// var navbarAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navbarAnchorTags);

/*for(var i = 0; i < navbarAnchorTags.length; i++){
	navbarAnchorTags[i].addEventListener('click', function(event){
		event.preventDefault();
		var targetSectionId = this.textContent.trim().toLowerCase();
		// console.log(targetSectionId);
		var targetSectionContent = document.getElementById(targetSectionId);
		// console.log(targetSectionContent); 
		var interval = setInterval(function(){
			var targetSectionCo = targetSectionContent.getBoundingClientRect();
		    console.log(targetSectionCo);

			if(targetSectionCo.top <= 0){
				clearInterval(interval);
				return;
			}
			window.scrollBy(0, 50);
		}, 20);
	});
}*/


// var navbarAnchorTags = document.querySelectorAll('.nav-menu a');
/*for(var i = 0; i < navbarAnchorTags.length; i++){
	navbarAnchorTags[i].addEventListener('click', function(event){
		event.preventDefault();
		var targetSectionId = this.textContent.trim().toLowerCase();
		// console.log(targetSectionId);
		var targetSectionContent = document.getElementById(targetSectionId);
		// console.log(targetSectionContent); 
		var interval = setInterval(scrollVertically, 20, targetSectionContent);
	});
}

function scrollVertically(targetSectionContent){
	var targetSectionCo = targetSectionContent.getBoundingClientRect();
	console.log(targetSectionCo);

	if(targetSectionCo.top <= 0){
		clearInterval(interval);
		return;
	}
	window.scrollBy(0, 50);
}*/

var navbarAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for(var i = 0; i < navbarAnchorTags.length; i++){
	navbarAnchorTags[i].addEventListener('click', function(event){
		event.preventDefault();
		var targetSectionID = this.textContent.trim().toLowerCase();
		// console.log(targetSectionID);
		var targetSectionContent = document.getElementById(targetSectionID);
		// console.log(targetSectionContent);
		console.log(i);
		interval = setInterval(scrollVertically, 20, targetSectionContent);
	});
}


function scrollVertically(targetSectionContent){
	var targetSectionCo = targetSectionContent.getBoundingClientRect();
	console.log(targetSectionCo);
	if(targetSectionCo.top <= 0){
		clearInterval(interval);
		return;
	}
	window.scrollBy(0, 5000);
}




