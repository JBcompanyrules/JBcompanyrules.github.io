var data;
var userdata;
var usercache;
setInterval("Save()", "200");
if(localStorage.getItem("saved")=="true"){
userdata = localStorage.getItem("data");
document.getElementById("userdata").value=userdata;
}

function Save(){
data = document.getElementById("userdata").value;
localStorage.setItem("data", data);
localStorage.setItem("saved", "true");
}


