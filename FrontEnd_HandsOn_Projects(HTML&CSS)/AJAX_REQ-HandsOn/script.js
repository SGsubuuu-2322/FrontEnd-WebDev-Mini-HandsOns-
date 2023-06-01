const btn = $("#fetch-dog-img-btn");

function fetchRandomDogImg() {
  var xhrReq = new XMLHttpRequest();

  xhrReq.onload = function () {
    // console.log(xhrReq.response);
    var JSONobj = JSON.parse(xhrReq.response);
    var imgUrl = JSONobj.message;
    $("#dog-img").attr("src", imgUrl);
  };

  xhrReq.open("get", "https://dog.ceo/api/breeds/image/random", true);
  xhrReq.send();
}

btn.click(fetchRandomDogImg);
