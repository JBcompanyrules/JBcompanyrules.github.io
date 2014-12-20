var user;

function login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(usernames[username]&&password ==usernames[username][0]){
  user = username[username];
  alert(user+" Has logged in");
}

