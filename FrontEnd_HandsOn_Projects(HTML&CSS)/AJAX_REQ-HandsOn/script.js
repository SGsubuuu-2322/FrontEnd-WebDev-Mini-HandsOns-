const btn = $("#fetch-dog-img-btn");

function fetchRandomDogImg() {
  // Step-1:- Through normal js...
  //   var xhrReq = new XMLHttpRequest();
  //   xhrReq.onload = function () {
  //     // console.log(xhrReq.response);
  //     var JSONobj = JSON.parse(xhrReq.response);
  //     var imgUrl = JSONobj.message;
  //     $("#dog-img").attr("src", imgUrl);
  //   };
  //   xhrReq.open("get", "https://dog.ceo/api/breeds/image/random", true);
  //   xhrReq.send();

  //   Step-2 :- Through jquery's 1st method...
  //   $.ajax({
  //     url: "https://dog.ceo/api/breeds/image/random",
  //     method: "get",
  //     success: function (data) {
  //       var imgUrl = data.message;
  //       $("#dog-img").attr("src", imgUrl);
  //     },
  //   });

  // Step-3 :- Through jquery's 2nd method...
  $.get("https://dog.ceo/api/breeds/image/random", function (data) {
    var imgUrl = data.message;
    $("#dog-img").attr("src", imgUrl);
  });
}

btn.click(fetchRandomDogImg);
