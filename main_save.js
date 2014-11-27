alert("welcome");
var data;
var userdata;
var usercache;
setTimeout("Check()", "1000");
setInterval("Save()", "200");
function Check(){
if(localStorage.getItem("saved")=="true"){
userdata = localStorage.getItem("data");
document.getElementById("userdata").value=userdata;
}
}
function Save(){
data = document.getElementById("userdata").value;
localStorage.setItem("data", data);
localStorage.setItem("saved", "true");
}


