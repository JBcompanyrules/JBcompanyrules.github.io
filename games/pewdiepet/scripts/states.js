//Player States
alert("OK here we go!");
function Check(){
  if(player.state ==="baby"){
    document.getElementById("playerstatus").cx="40";
    document.getElementById("playerstatus").cy="40";
    document.getElementById("playerstatus").r="30";
  }
}
var player ={
  coins:"0",
  xp:"0",
  health:"50",
  start: function(){var username =prompt("What is your pets name", "PewDiePet023");},
  Cache:[],
  state:"baby"
  check: Check()
}

//Start up
player.start();
