var c = 1;
var count = document.getElementById('count');

var iBox = document.getElementById('inner');
iBox.addEventListener('click', function(event){
	count.innerHTML = c++;
	console.log('Inner Box has clicked');
	event.stopPropagation();
});



var oBox = document.getElementById('outer');
oBox.addEventListener('click', function(){
	console.log('Outer Box has clicked');
});



document.addEventListener('click', function(){
	console.log('Whole Document has clicked');
});

