var test =  [1, "apple", -3, "orange", 0.5];

function numbersOnly(arr){
    var narr = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof(arr[i]) == "number"){
            narr.push(arr[i]);
        }
    }
    return narr;
}

console.log(numbersOnly(test));
