const outerBox = $(".outer-box");
const innerBtn = $(".inner-btn");
const slider = $(".slider");
const html = $("html");
let clicked = false;

outerBox.click(() => {
  if (clicked) {
    innerBtn.removeClass("slider");
    clicked = false;
    html.css("backgroundColor", "white");
    outerBox.css({
      borderColor: "black",
    });
    innerBtn.css({
      backgroundColor: "black",
    });
  } else {
    innerBtn.addClass("slider");
    clicked = true;
    html.css("backgroundColor", "black");
    outerBox.css({
      borderColor: "white",
    });
    innerBtn.css({
      backgroundColor: "white",
    });
  }
  //   alert("Its been clicked...");
});
