var symbols=["♠", "Ω", "♤", "♣",  "♧", "♥", "♡", "♦", "♢", "♔", "♕", "♚", "♛", "★", "☆", "✮",  "✯", "☀", "☁", "☺", "۞", "۩"];
var Combo =["➀", "➁", "➂", "➃", "➄", "➅", "➆", "➇", "➈", "➉", "➊", "➋", "➌", "➍", "➎", "➏", "➐", "➑", "➒", "➓"];
var rnd;
function Find(){
  rnd = Math.floor(Math.random()*16)
  document.getElementById("symbol").innerHTML=symbols[rnd];
}
