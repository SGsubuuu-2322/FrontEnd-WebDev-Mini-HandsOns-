function moveRight(){
	console.log('Hello Guysss!!!');
	if(ctrl%2 != 0){
		inner.style.float = 'right';
		document.body.style.backgroundColor = "#343a40";
		outer.style.borderColor = "white";
		inner.style.backgroundColor = "white";
		it.style.color = "white";
		ctrl++;
	}
	else{
		inner.style.float = 'left';
		document.body.style.backgroundColor = "white";
		outer.style.borderColor = "black";
		inner.style.backgroundColor = "black";
		it.style.color = "black";
		ctrl++;
	}

}


var ctrl = 1;
var inner = document.getElementById('inner');

var it = document.getElementById('it');
var outer = document.getElementById('outer');
outer.addEventListener('click', moveRight);