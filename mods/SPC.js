//Made by HASHARAHHA14
clientMessage("Please leave world and come back to load script");
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
  "kill": ["player.setHealth(0)"],
  "heal": ["Player.setHealth(20)"],
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
    print("Command not found in commands: Line 50-")
  }
}

function CallCommand(){
  if(cmd[0]=="help"||cmd[0]=="help"&&cmd[1]=="1"){
    clientMessage("*                                        *")
    clientMessage("Help list 1 of "+ current.helplist);
    clientMessage("/give <ItemId> <Amount> <Damage|Default 0>");
    clientMessage("/gamemode <0|1>");
    clientMessage("/settime <TimeId>");
    clientMessage("/explode <Radius>");
    clientMessage("/sethome [Sets your Home]");
    clientMessage("/delhome [deletes your home]");
    clientMessage("/home [Teleports you Home]");
    clientMessage("/heal [heals the player]");
    clientMessage("/kill [Kills the player]");
    clientMessage("/info [Pulls up info on mod creater]");
  }
  if(cmd[0]=="give"){
    addItemInventory(parseInt(cmd[1]), parseInt(cmd[2]), parseInt(cmd[3]));
  }
  if(cmd[0]=="gamemode"){
    Level.setGameMode(parseInt(cmd[1]));
  }
}
