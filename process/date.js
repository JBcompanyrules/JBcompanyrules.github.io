alert("Finding Date")
var Date = new Date();
var dates =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weeks =["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];
setText("calender-month", dates[Date.getMonth()]);
setText("calender-week", weeks[Date.getWeek()]);
setText("calender-day", Date.getWeek());
setText("calender-year", Date.getDate()+1900);

function setText(id, val){
if(val < 10){
document.getElementById(id).innerHTML='0'+val;
}
else{
document.getElementById(id).innerHTML=val;
}
}
