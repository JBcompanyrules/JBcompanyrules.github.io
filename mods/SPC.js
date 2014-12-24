//Made by HASHARAHHA14
Msg("Mod Made by HASHARAHHA14")
clientMessage("<HASHARAHHA14> Please leave world and come back to load script.");
print("Mod is not loaded");
var loaded =false;
var rnd;
var colors ={
  black:"§0",
  blue:"§9",
  red:"§c",
  white:"§f"
};
var static;
var version ="0.1";
var home =[];
var current ={};
var homeset =false;
//Doesn't Do anything, just for my reference and procCmd checker
var commands ={
  "help": "Command",
  "give":"Command",
  "gamemode": "Command",
  "settime": "Command",
  "explode": "Command",
  "sethome": "Command",
  "delhome": "Command",
  "home": "Command",
  "kill": "Command",
  "heal": "Command"
};
current.helplist ="1";
if(modPE.readData(homeX)&&modPE.readData(homeY)&&modPE.readData(homeZ)){
  home[0] = modPE.readData(homeX);
  home[1] = modPE.readData(homeY);
  home[2] = modPE.readData(homeZ);
  static =false;
  homeset =true;
}

function Msg(msg){
  clientMessage(colors.blue+"[SPC] "+colors.white+msg);
}
function newLevel(){
  loaded =true;
  print("Mod is loaded");
  modPE.setItem(500, "hoe", 0, "Wand");
}

function useItem(x, y, z, itemId, blockId){
  if(itemId ==500){
    settile(x, y, z, 0, 0);
    var StaticX = x;
    var StaticY = y;
    var StaticZ = z;
  }
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
      print("Error line 83-200: "+error)
    }
  }
  else{
    clientMessage("<server> Unknown command: "+cmd[0]);
    print("Command not found in commands: Line 60-125");
  }
}

function CallCommand(){
  if(cmd[0]=="help"||cmd[0]=="help"&&cmd[1]=="1"){
    clientMessage("*                                        *")
    Msg("Help list 1 of "+ current.helplist);
    clientMessage("/give <ItemId> <Amount> <Damage|Default 0>");
    clientMessage("/gamemode <0|1>");
    clientMessage("/settime <TimeId>");
    clientMessage("/explode <Radius>");
    clientMessage("/sethome <name> [Sets your Home]");
    clientMessage("/delhome [deletes your home]");
    clientMessage("/home [Teleports you Home]");
    clientMessage("/heal [heals the player]");
    clientMessage("/kill [Kills the player]");
    clientMessage("/info [Pulls up info on mod creater]");
  }
  if(cmd[0]=="give"){
    Msg(cmd[2]+" Of "+cmd[1]+" Was given")
    addItemInventory(parseInt(cmd[1]), parseInt(cmd[2]), parseInt(cmd[3]));
  }
  if(cmd[0]=="gamemode"&&cmd[1] != undefined){
    Msg("Gamemode was set to "+cmd[1]);
    Level.setGameMode(parseInt(cmd[1]));
  }
  if(cmd[0]=="settime"&&cmd[1] != undefined){
    Msg("Time was set to "+cmd[1]);
    Level.setTime(parseInt(cmd[1]));
  }
  if(cmd[0]=="explode"){
    Msg("Player has exploded");
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
    static =cmd[1];
    Msg("Home "+cmd[1]+" was set");
  }
  if(cmd[0]=="delhome"){
    homeset =false;
    modPE.removeData(homeX);
    modPE.removeData(homeY);
    modPE.removeData(homeZ);
    home[0] =null;
    home[1] =null;
    home[2] =null;
    Msg("Home deleted: "+static);
  }
  if(cmd[0]=="home"){
    Msg("You were Teleported to your home");
    setPosition(player, home[0], home[1], home[2]);
  }
  if(cmd[0]=="heal"){
    Msg("Player healed");
    Player.setHealth(21);
  }
  if(cmd[0]=="kill"){
    Msg("Player Died")
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
