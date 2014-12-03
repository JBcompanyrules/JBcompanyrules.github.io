//Player States
var PlayerState = document.getElementById("playerstatus");
function Check(){
  if(player.state ==="baby"){
    PlayerState.cx="40";
    PlayerState.cy="40";
    PlayerState.r="30";
  }
}
var player ={
  coins:"0",
  xp:"0",
  health:"50",
  start: function(){ var username = prompt("What is your pets name", "PewDiePet023"); },
  Cache:["0", "0", "0"],
  state:"baby"
  check: Check()
}

//Start up
player.start();
