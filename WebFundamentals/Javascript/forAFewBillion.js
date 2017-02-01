howMuch(30);

function howMuch(days){
    var money = 0.01;
    for(var i = 2; i <= days; i++){
        money = money * 2;
    }
    console.log(money);
}
//
// console.log(howMuch(10000000));
//
// function howMuch(days){
//     var money = 0.01;
//     for(var i = 2; i <= days; i++){
//         money = money * 2;
//       if(money >= Infinity){
//         return i;
//       }
//     }
// }
