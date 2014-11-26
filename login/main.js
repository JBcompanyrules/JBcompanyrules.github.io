var user;

function Login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(username=="hasharahha@gmail.com"&&password=="JAB"){
user ="Jacob,Bondley";
document.getElementById("user").innerHTML=user
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

