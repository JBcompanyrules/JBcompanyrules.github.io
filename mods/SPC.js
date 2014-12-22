//Made by HASHARAHHA14
clientMessage("Please leave world and come back to load script");
print("Mod is unloaded");
var loaded =false;
var rnd;
var static;
var version ="0.1";
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
  "heal": ["Player.setHealth(20)"]
};
current.helplist ="1";
if(modPE.readData(homeX)&&modPE.readData(homeY)&&modPE.readData(homeZ)){
  home[0] = modPE.readData(homeX);
  home[1] = modPE.readData(homeY);
  home[2] = modPE.readData(homeZ);
  static =false;
  homeset =true;
}

function newLevel(){
  loaded =true;
  print("Mod is loaded")
}

function modTick(){
    if(loaded){
  current.playerX = Math.round(getPlayerX());
  current.playerY = Math.round(getPlayerY());
  current.playerZ = Math.round(getPlayerZ());
  }
  rnd =Math.floor(Math.random()*10);
}

function procCmd(command){
  static = command;
  var cmd = command.split();
  if(commands[cmd[0]]){
    try{
    CallCommand();
    }catch(error){
      print("Error line 50: "+error)
    }
  }
  else{
    clientMessage("<server>Unknown command: "+cmd[0]);
    print("Command not found in commands: Line 60-125");
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
  if(cmd[0]=="settime"){
    Level.setTime(parseInt(cmd[1]));
  }
  if(cmd[0]=="explode"){
    Level.explode(current.playerX, current.playerY, current.playerZ, parseInt(cmd[1]));
  }
  if(cmd[0]=="sethome"&&homeset ==false){
    modPE.saveData(homeX, current.playerX);
    modPE.saveData(homeY, current.playerY+2);
    modPE.saveData(homeZ, current.playerZ);
    homeset =true
    home[0] =current.playerX;
    home[1] =current.playerY;
    home[2] =current.playerZ;
  }
  if(cmd[0]=="delhome"){
    homeset =false;
    modPE.removeData(homeX);
    modPE.removeData(homeY);
    modPE.removeData(homeZ);
    home[0] =null;
    home[1] =null;
    home[2] =null;
  }
  if(cmd[0]=="home"){
    setPosition(player, home[0], home[1], home[2]);
  }
  if(cmd[0]=="heal"){
    Player.setHealth(21);
  }
  if(cmd[0]=="kill"){
    setTimeout(function(){
      Player.setHealth(0);
    }, 2000);
  }
  if(cmd[0]=="info"){
    clientMessage("Created By:");
    clientMessage("HASHARAHHA14, For more mods go to:");
    clientMessage("http://jbcompanyrules.blogspot.com");
    clientMessage("Version: "+version);
  }
}
