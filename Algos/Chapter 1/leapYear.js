function leapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                console.log("true");
                return true;
            }
            console.log("false");
            return false;
        }
        console.log("true");
        return true;
    }
    else{
        console.log("false");
        return false;
    }
}

var leapYears = [1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020];

leapYear(leapYears[0]);
leapYear(leapYears[1]);
leapYear(leapYears[2]);
leapYear(leapYears[3]);
leapYear(leapYears[4]);
leapYear(leapYears[5]);
leapYear(leapYears[6]);
leapYear(leapYears[7]);
leapYear(leapYears[8]);
leapYear(leapYears[9]);
