let clock =document.getElementById('clock');
let time;
function getTime() {
    time = new Date()
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds(); 
    let timeOfDay='AM';
    if(h>=12){
        timeOfDay='PM'
        h-=12
    }
    clock.textContent = `${h}:${m}:${s} ${timeOfDay}`;
    setTimeout(getTime,  1000);
}
getTime();
