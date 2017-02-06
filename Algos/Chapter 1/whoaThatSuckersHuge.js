function sumOfAllOdds(start, end){
    //find first and last odd number
    var firstOdd = start;
    var lastOdd = end;
    if(start % 2 === 0){
        firstOdd = start + 1;
    }
    if(end % 2 === 0){
        lastOdd = end - 1;
    }
    //find # of Odds within range
    var items = (lastOdd - firstOdd) / 2 + 1;
    //find sum of all odds within range
    var sum = (firstOdd + lastOdd) * (items/2);
    return sum;
}

function sumOfMultiples(start, end, multiple){
    //find first and last multiple of the range
    var firstMultiple = start;
    var lastMultiple = end;
    if(start % multiple !== 0){
        firstMultiple = (multiple - (start % multiple)) + start;
    }
    if(end % multiple !== 0){
        lastMultiple = end - (end % multiple);
    }
    //find # of multiples within range
    var items = (lastMultiple - firstMultiple) / multiple +1
    //find sum of all multiples within range
    var sum = (firstMultiple + lastMultiple) * (items/2);
    return sum;
}

function sumOfNumbers(start, end, oddOrEvenOrMultiple, multiple=1){
//order start and end range so that end>start
    if(start > end){
        var temp = start;
        start = end;
        end = temp;
    }
    if(oddOrEvenOrMultiple === "even"){
        multiple = 2;
    }
    if(oddOrEvenOrMultiple === "odd"){
        return sumOfAllOdds(start, end);
    }
    else{
        return sumOfMultiples(start, end, multiple)
    }
}
