function sayHello(){
    alert('Hello Guysss!!!');
}
function sayByee(){
    alert('Byeee Guysss!!!');
}

console.log("Hello Buddies...");
var ids1 = document.getElementById('btn1');
ids1.addEventListener('click', sayHello);
ids1.addEventListener('click', sayByee);