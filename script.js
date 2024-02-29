
let ampm=document.getElementById('ampm')
function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    if(hr>12){
    hr=hr-12
    ampm.innerHTML='PM'
    }

    document.getElementById('hours').innerHTML=padzero(hr)
    document.getElementById('mins').innerHTML=padzero(min)
    document.getElementById('secs').innerHTML=padzero(sec)
}

function padzero(num){
    return (num<10)?"0"+num:num
}

setInterval(displayTime,500)

