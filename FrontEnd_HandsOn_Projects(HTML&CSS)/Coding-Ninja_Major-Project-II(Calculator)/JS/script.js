let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}

const show = (n) => {   
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}






















// var btns = document.querySelectorAll("button");
// var dsp = document.getElementsByClassName("text-part");

// var oprtr = null;
// var oprnd1 = 0;
// var oprnd2 = 0;


// for(var i = 0; i < btns.length; i++){
//     btns[i].addEventListener("click", function(){
//         var value = this.getAttribute("data-value");
//         // console.log(value);
//         for(var j = 0; j < dsp.length; j++){
//            if(value == '+'){
//             oprtr = '+';
//             oprnd1 = parseFloat(dsp.textContent);
//             console.log(oprnd1);
//            }else if(value == '='){
//             oprnd2 = parseFloat(dsp.textContent);
//             console.log(oprnd2);
//             console.log(eval(oprnd1 + " " + oprtr + " " + oprnd2))
//            }else{
//             dsp[j].innerText += value;
//            }
//         }
//     });
// }




// var btns = document.querySelectorAll("button");
// var dsp = document.getElementsByClassName("text-part");

// for(var i = 0; i < btns.length; i++){
//     btns[i].addEventListener("click", function(){
//         var value = this.getAttribute("data-value");
//         console.log(value);
//         for(var j = 0; j < dsp.length; j++) {
//             dsp[j].innerText += value;
//         }
//     });
// }
