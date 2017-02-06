function youSayItsYourBirthday(bmonth,bday,num1,num2){
    if(bmonth == num1 && bday == num2 || bmonth == num2 && bday == num1){
        console.log("How did you know?");
    }
    else{
        console.log("Just another day");
    }
}

youSayItsYourBirthday(3,14,14,3);
youSayItsYourBirthday(3,14,3,14);
youSayItsYourBirthday(14,3,14,3);
youSayItsYourBirthday(14,3,3,14);
youSayItsYourBirthday(3,14,3,3);
youSayItsYourBirthday(3,14,14,14);
youSayItsYourBirthday(3,3,3,3);
youSayItsYourBirthday(1,2,3,4);
