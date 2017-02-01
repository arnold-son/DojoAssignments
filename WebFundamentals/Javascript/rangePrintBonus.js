printRange(2,10,2);
printRange(10,2,2);
printRange(10);
printRange(10,1);

function printRange(start,end=0,skip=1){
    if(end === 0){
        end = start;
        start = 0;
    }
    if(end > start){
        for(var i = start; i < end; i += skip){
            console.log(i);
        }
    }
    if(start > end){
        for(var i = end; i < start; i += skip){
            console.log(i);
        }
    }
    if(start === end){
        console.log("invalid range")
    }
}
