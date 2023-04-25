var a = 10;
a = 20;
 

console.log(a);


const b = 10;
// b = 20;
console.log(b);


for(let i = 0; i <= 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}