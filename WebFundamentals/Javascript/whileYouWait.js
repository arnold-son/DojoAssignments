var days = 60;

while(days >= 0){
    if(days > 30){
        console.log(days,"days until my birthday. What is the meaning of life?");
    }
    if(days < 30 && days >= 5){
        console.log(days + " days until my birthday. I am hyped!");
    }
    if(days < 5 && days > 0){
        console.log(days + " DAYS UNTIL MY BIRTHDAY! WUBBA LUBBA DUB DUB!")
    }
    if(days === 0){
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
        console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
        console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
    }
    days--;
}
