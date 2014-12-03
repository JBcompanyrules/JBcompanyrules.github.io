//Player States
alert("OK here we go!");
function Check(){
  if(player.state ==="baby"){
    document.getElementById("playerstatus").cx="40";
    document.getElementById("playerstatus").cy="40";
    document.getElementById("playerstatus").r="30";
  }
}

var start = function(){
  var username = prompt("Your pet's name", "The pets name");
}

var player ={
  coins:"0",
  xp:"0",
  health:"50",
  state:"baby",
  playerCheck: Check(),
  start: start()
}

//Start up
player.start();
