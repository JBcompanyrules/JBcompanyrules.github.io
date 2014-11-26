var symbols=["♠", "Ω", "♤", "♣",  "♧", "♥", "♡", "♦", "♢", "♔", "♕", "♚", "♛", "★", "☆", "✮",  "✯", "☀", "☁", "☺", "۞", "۩","➀", "➁", "➂", "➃", "➄", "➅", "➆", "➇", "➈", "➉", "➊", "➋", "➌", "➍", "➎", "➏", "➐", "➑", "➒", "➓","εїз", "Ƹ̵̡Ӝ̵̨̄", "ξЖЗ", "εжз", "☎", "☏", "¢", "☚", "☛", "☜", "☝", "☞", "☟", "✍", "✌", "♨", "๑", "❀", "✿", "ψ", "♪", "♩", "♬", "✄", "✂", "✆", "✉", "✦", "✧","ⓐ", "ⓑ", "ⓒ", "ⓓ", "ⓔ", "ⓕ", "ⓖ", "ⓗ", "ⓘ", "ⓙ", "ⓚ", "ⓛ", "ⓜ", "ⓝ", "ⓞ", "ⓟ", "ⓠ", "ⓡ", "ⓢ", "ⓣ", "ⓤ", "ⓥ", "ⓦ", "ⓧ", "ⓨ", "ⓩ", "⚡", "💀"];
var rnd;
var id;
setInterval("Show()", "200");
function Find(){
  rnd = Math.floor(Math.random()*60)
  document.getElementById("symbol").innerHTML=symbols[rnd];
}

function log(msg){
  confirm("Console: \n"+msg)
}

function FindP(){
  id = document.getElementById("Id").value
  document.getElementById("symbol").innerHTML=symbols[id];
}

function Show(){
  var Num = document.getElementById("Id").value;
  document.getElementById("Num").innerHTML=Num;
}
