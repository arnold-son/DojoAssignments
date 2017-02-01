var test = [ "James", "Jill", "Jane", "Jack" ];

fancyArray(test);

function fancyArray(arr){
  var str = " -> "
  for(var i = 0; i < arr.length; i++){
    console.log(i + str + arr[i]);
  }
}
