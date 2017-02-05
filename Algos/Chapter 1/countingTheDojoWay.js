function countingTheDojoWay(){
    for(var i = 1; i < 101; i++){
        if(i % 5 === 0){
            var str = "Coding";
            if(i % 10 === 0){
                str+=" Dojo";
            }
            console.log(str);
            continue;
        }
        console.log(i);
    }
}

countingTheDojoWay();
