function settingAndSwapping(myNumber,myName){
    var temp = myNumber;
    myNumber = myName;
    myName = temp;
    console.log(myNumber,myName);
}

settingAndSwapping(42,"Arnold");
