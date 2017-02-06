function flexibleCountdown(lowNum,highNum,mult){
    if(mult < highNum && mult > lowNum){
        if(highNum % mult !== 0){
            highNum-= mult - (lowNum % mult);
        }
        for(var i = highNum; i >= lowNum; i-=mult){
            console.log(i);
        }
    }
    else{
        return false;
    }
}
