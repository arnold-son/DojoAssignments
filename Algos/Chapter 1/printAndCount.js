function printAndCount(){
    var count = 0;
    for(var i = 515; i<4097; i+=5){
        count+=1;
        console.log(i);
    }
    console.log(count);
}

printAndCount();
