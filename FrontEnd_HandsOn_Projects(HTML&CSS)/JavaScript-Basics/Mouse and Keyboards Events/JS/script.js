console.log('Script tag is running fine...');

var outer = document.getElementById('outer');
outer.addEventListener('mouseover', function(){
	console.log('Mouse Over Event has been happening...');
});

var outer = document.getElementById('outer');
outer.addEventListener('mouseout', function(){
	console.log('Mouse Out Event has been happening...');
});


// var inputSearch = document.getElementById('search');
// inputSearch.addEventListener('keypress', function(){
// 	console.log('Key Press Event has been happening...');
// });




document.addEventListener('keydown', function(event){
	console.log('Key down Event happened...', event.keyCode);
});
