let hr = 0;
let mn = 0;
let sc = 0;
let interval = null;

function startTime() {
    sc++;
    if (sc === 60) {
        mn++;
        sc = 0;
    }
    if (mn == 60) {
        hr++;
        mn = 0;
    }

    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    hour.innerHTML = hr.toString().padStart(2, "0");
    min.innerHTML = mn.toString().padStart(2, "0");
    sec.innerHTML = sc.toString().padStart(2, "0");
}


document.getElementById("start").addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(startTime,1000);
    }
}
)

document.getElementById("pause").addEventListener("click",()=>{
    if(interval){
        clearInterval(interval);
        interval = null;
    }
}
)

document.getElementById("reset").addEventListener("click",()=>{
    if(interval){
        clearInterval(interval);
        interval = null;
    }

    hr = 0;
    mn = 0;
    sc = 0;

    hour.innerHTML = hr.toString().padStart(2,"0");
    min.innerHTML = mn.toString().padStart(2,"0");
    sec.innerHTML = sc.toString().padStart(2,"0");
})