function countDown(seconds){
    var intervalId = setInterval(function(){
        if(seconds <= 0){
            console.log('Ring Ring Ring!!!');
            clearInterval(intervalId);
        } else {
            console.log('Timer: ' + seconds);
            seconds--;
        }
        
    }, 1000);
}

countDown(3);