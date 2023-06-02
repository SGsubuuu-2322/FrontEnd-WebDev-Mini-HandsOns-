const img = $(".space-img-container");

function getImage(data) {
  //   $("<img>", {
  //     src: data.url,
  //     height: "100%",
  //     width: "100%",
  //   }).appendTo(img);

  $(document.createElement("img")).attr("src", data.url).appendTo(img);
}

$.ajax({
  url: "https://api.nasa.gov/planetary/apod",
  method: "GET",
  success: getImage,
  data: {
    api_key: "rTmjxHqtIWX95Vhb4gkSYjNWWTJ8QhnmqquotWbe",
    date: "2022-09-22",
  },
});
