var http = require("http");
var msg = "";

var Artists = {
  artists: ["The Beatles", "Les Savy Fav", "Caribou"]
}

var Albums = {
  beatles: ["The White Album", "Abbey Road"],
  lessavyfav: ["Inches", "Emor"],
  caribou: ["Andorra", "Swim"]
}

var Songs = {
  whitealbum: ["Back in the USSR", "Rocky Raccoon", "Dear Prudence"],
  abbeyroad: ["Golden Slumbers", "Carry That Weight", "Come Together"],
  inches: ["The Sweat Descends", "Obsessed With The Excess", "Fading Vibes"],
  emor: ["In These Woods", "Asleepers Union", "Rome"],
  andorra: ["Eli", "Irene", "Sandy"],
  swim: ["Odessa", "Sun", "Bowls"]
}

var arrayToUl = function(array){
  var resultString = "<ul>";
  for (i=0; i<array.length; i++){
    resultString = resultString + "<li>" + array[i] + "</li>";
  };
  resultString = resultString + "</ul>";
  return resultString;
}


var server = http.createServer(function(request, response){
  var path = request.url;
  var tree = path.split("/");


  if (path === "/artists"){
    msg = arrayToUl(Artists);
  }

  response.end("<html><body>" + msg + "</body></html>");
});
server.listen(3000);
