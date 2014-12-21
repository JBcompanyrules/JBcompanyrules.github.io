var user;
alert("main Loaded");
function login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(usernames[username]&&password ==usernames[username][0]){
  alert(usernames[username][1]+" Has logged in");
}
else{ 
 alert("Username/password is incorrect"); 
}
}
