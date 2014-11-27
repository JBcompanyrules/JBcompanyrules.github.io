alert("welcome");
var data;
var userdata;
var usercache;
Load();
setInterval("Save()", "2000");
function Save(){
  var save = document.getElementById("userdata").value;
  localStorage.setItem("data", save);
}

function Load(){
  data = localStorage.getItem("data");
  document.getElementById("userdata").setAttribute("value", data);
}

