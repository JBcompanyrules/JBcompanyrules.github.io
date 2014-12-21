var user;
alert("main Loaded");
function login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(usernames[username]&&password ==usernames[username][0]){
  user = username[username][1];
  alert(user+" Has logged in");
}
else{ 
 alert("Username/password is incorrect"); 
}
}
