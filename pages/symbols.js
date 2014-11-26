var symbols=["♠", "Ω", "♤", "♣",  "♧", "♥", "♡", "♦", "♢", "♔", "♕", "♚", "♛", "★", "☆", "✮",  "✯", "☀", "☁", "☺", "۞", "۩","➀", "➁", "➂", "➃", "➄", "➅", "➆", "➇", "➈", "➉", "➊", "➋", "➌", "➍", "➎", "➏", "➐", "➑", "➒", "➓"];
var rnd;
function Find(){
  rnd = Math.floor(Math.random()*35)
  document.getElementById("symbol").innerHTML=symbols[rnd];
}
