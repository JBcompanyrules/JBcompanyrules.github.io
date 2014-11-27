alert("welcome");
var data;
var userdata;
var usercache;

setInterval("Save()", "2000");
function Save(){
  var save = document.getElementById("userdata").value;
  localStorage.setItem("data", save);
}

