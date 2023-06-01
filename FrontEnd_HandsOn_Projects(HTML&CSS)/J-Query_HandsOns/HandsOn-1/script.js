// const hTag = document.getElementById("h1-tag");
// hTag.innerHTML = "Welcome...";

$("#h1-tag").html("Welcome...");
const h = $("#h1-tag");
const p = $("p");
const div = $("div");

h.css("color", "red");
p.css("font-size", "2em");
div.css({
  height: "50px",
  width: "50px",
  backgroundColor: "cyan",
});

div.click(function () {
  const elem = $(this);
  elem.width(elem.width() + 10 + "px");
  //   alert("The div has been clicked...");
});
