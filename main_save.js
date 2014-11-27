alert("welcome");
var data;
var userdata;
var usercache;
setTimeout("Load()", "1000");
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
}
function Load(){
  load = localStorage.getItem("data");
  document.getElementById("userdata").value=load;
}


