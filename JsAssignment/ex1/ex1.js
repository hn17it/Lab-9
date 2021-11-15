

let startSeconds, stopSeconds;
function startTime() {
    var start = new Date();
    startSeconds = start.getTime();
    console.log("start time" +  start.getMilliseconds());

    
}

function stopTime() {
    var stop = new Date();
    stopSeconds =  stop.getTime();
    console.log("stop time" +  stop.getTime());

    alert('Time'+(stopSeconds - startSeconds)/600);
}