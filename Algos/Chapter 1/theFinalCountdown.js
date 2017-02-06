function theFinalCountdown(mult,start,end,exception){
    if(end<start){
        var temp = start;
        start = end;
        end = temp;
    }
    if(start % mult !== 0){
        start+= mult - (start % mult);
    }
    while(start <= end){
        if(start !== exception){
            console.log(start);
        }
        start+=mult;
    }
}

theFinalCountdown(3,5,17,9);
