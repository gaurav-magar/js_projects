let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let year = document.getElementById("year")
let month  = document.getElementById("month")
let day = document.getElementById("day")

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function updateClock(){
    let d = new Date();  
    hour.innerHTML = d.getHours();
    min.innerHTML = d.getMinutes();
    sec.innerHTML = d.getSeconds();

    year.innerHTML = d.getFullYear();
    month.innerHTML = months[d.getMonth()];
    day.innerHTML = d.getDate();
}
updateClock();
setInterval(updateClock,1000);

