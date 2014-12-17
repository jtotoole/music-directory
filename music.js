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
    link = array[i].replace(/ /g, "_").toLowerCase();
    resultString = resultString + "<li><a href='http://localhost:3000/" + link + "'>" + array[i] + "</a></li>";
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
  else if (path === "/the_beatles"){
    msg = arrayToUl(Albums.beatles);
  }
  else if (path === "/les_savy_fav"){
    msg = arrayToUl(Albums.lessavyfav);
  }
  else if (path === "/caribou"){
    msg = arrayToUl(Albums.caribou);
  }
  else if (path === "/the_white_album"){
    msg = arrayToUl(Songs.whitealbum);
  }
  else if (path === "/abbey_road"){
    msg = arrayToUl(Songs.abbeyroad);
  }
  else if (path === "/inches"){
    msg = arrayToUl(Songs.inches);
  }
  else if (path === "/emor"){
    msg = arrayToUl(Songs.emor);
  }
  else if (path === "/andorra"){
    msg = arrayToUl(Songs.andorra);
  }
  else if (path === "/swim"){
    msg = arrayToUl(Songs.swim);
  }else{
    msg = "<h1>Missing something...</h1>";
  }
  response.end("<html><body>" + msg + "<br><a href='localhost:3000/artists'>Return to home page</a></body></html>");
});
server.listen(3000);
