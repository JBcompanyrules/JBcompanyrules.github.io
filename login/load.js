var user;
var pass;
var loadScript = document.createElement('script');
loadscript.src ="https://jbcompanyrules.github.io/login/users.js";
document.appendChild(loadScript);

function Authenticate(){
  user = prompt("What is your username", "username");
  pass = prompt("What is your password", "password");
  if(username[user]&&pass =username[user][0]){
    alert("Acess allowed");
    document.getElementById("lock").setAttribute("style", "display: block;");
  }
  else{
    alert("Unknow user/pass");
  }
  
}
