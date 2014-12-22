//Made by HASHARAHHA14
var loaded =false;
var static;
var home =[];
var current ={};
var homeset =false;
var commands ={
  "help":[1, 2],
  "give":["itemId", "Amount", "Damage"],
  "gamemode": [0, 1],
  "settime": ["Time#"],
  "explode": ["radius"],
  "sethome": [playerX, playerY, playerZ, true],
  "delhome": [0, 0, 0, false],
  "home": ["home[0]", "home[1]", "home[2]"],
  "kill": ["player.setHealth(0)"]
};

function newLevel(){
  loaded =true;
}

function modTick(){
    if(loaded==true){
  current.X = Math.round(getPlayerX());
  current.Y = Math.round(getPlayerY());
  current.Z = Math.round(getPlayerZ());
  }
}

