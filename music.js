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
    msg = arrayToUl(Artists.artists);
  }
  else if (path === "/artists/beatles"){
    msg = arrayToUl(Albums.beatles);
  }
  else if (path === "/artists/lessavyfav"){
    msg = arrayToUl(Albums.lessavyfav);
  }
  else if (path === "/artists/caribou"){
    msg = arrayToUl(Albums.caribou);
  }
  else if (path === "/artists/beatles/whitealbum"){
    msg = arrayToUl(Songs.whitealbum);
  }
  else if (path === "/artists/beatles/abbeyroad"){
    msg = arrayToUl(Songs.abbeyroad);
  }
  else if (path === "/artists/lessavyfav/inches"){
    msg = arrayToUl(Songs.inches);
  }
  else if (path === "/artists/lessavyfav/emor"){
    msg = arrayToUl(Songs.emor);
  }
  else if (path === "/artists/caribou/andorra"){
    msg = arrayToUl(Songs.andorra);
  }
  else if (path === "/artists/caribou/swim"){
    msg = arrayToUl(Songs.swim);
  }else{
    msg = "<h1>Missing something...</h1>";
  }
  response.end("<html><body>" + msg + "<br><a href='localhost:3000'>Return to home page</a></body></html>");
});
server.listen(3000);
