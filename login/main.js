var user;

function Login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(username=="hasharahha@gmail.com"&&password=="JAB"){
user ="Jacob,Bondley";
document.getElementById("user").innerHTML=user
document.getElementById("Login").style.display='none'
alert("Jacob has signed in");
}
else{
alert("Incorrect username or password");
}
}

function Check(event){
  if(13 === event.keyCode){
    Login();
  }
}

