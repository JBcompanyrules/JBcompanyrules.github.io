//Made by HASHARAHHA14
var static;
var home =[];
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
