var Date = new Date();

setText("calender-month", dates[Date.getMonth()]);

function setText(id, val){
if(val < 10){
document.getElementById(id).innerHTML='0'+val;
}
else{
document.getElementById(id).innerHTML=val;
}
}
