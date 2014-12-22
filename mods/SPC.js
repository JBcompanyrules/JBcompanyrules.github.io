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
current.helplist ="1";
if(modPE.readData(homeX)&&modPE.readData(homeY)&&modPE.readData(homeZ)){
  home[0] = modPE.readData(homeX);
  home[1] = modPE.readData(homeY);
  home[2] = modPE.readData(homeZ);
  static =false;
}

function newLevel(){
  loaded =true;
}

function modTick(){
    if(loaded){
  current.X = Math.round(getPlayerX());
  current.Y = Math.round(getPlayerY());
  current.Z = Math.round(getPlayerZ());
  }
}

function procCmd(command){
  static = command;
  var cmd = command.split();
  if(commands[cmd[0]]){
    CallCommand();
  }
  else{
    clientMessage("<server>Unknown command: "+cmd[0]);
    print("Command not found in commands: 45")
  }
}

function CallCommand(){
  if(cmd[0]=="help"||cmd[0]=="help"&&cmd[1]=="1"){
    clientMessage("Help list 1 of "+ current.helplist);
    clientMessage("/give <ItemId> <Amount> <Damage|Default 0>");
    clientMessage("/")
  }
}
