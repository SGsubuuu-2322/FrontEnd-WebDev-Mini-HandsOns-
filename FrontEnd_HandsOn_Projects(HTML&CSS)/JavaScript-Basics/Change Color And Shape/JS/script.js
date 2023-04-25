var available_colors = [
  "red",
  "yellow",
  "green",
  "blue",
  "magenta",
  "brown",
  "black",
  "cyan",
  "pink",
  "purple",
  "orange"
];
var available_shapes = [
  "circle",
  "square",
  "rectangle",
  "triangle-up",
  "triangle-down",
  "triangle-bottom-left",
  "triangle-bottom-right",
  "triangle-top-left",
  "triangle-top-right"
];

var cc = document.getElementById('btn1');
cc.addEventListener("click", function () {
  //math.floor gives the largest integer value that is less than or equal to that number.
  var next_color = available_colors[Math.floor(Math.random() * 11)];
  var cont = document.getElementById('container');
  cont.style.backgroundColor = next_color;
});

var cs = document.getElementById('btn2');
cs.addEventListener("click", function () {
  var next_shape = available_shapes[Math.floor(Math.random() * available_shapes.length)];
  var shape = document.getElementById('shape');
  shape.setAttribute("class", next_shape);
});