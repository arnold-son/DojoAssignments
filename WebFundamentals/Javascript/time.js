giveMeTime(1,50,"AM");
giveMeTime(3,50,"PM");
giveMeTime(11,50,"AM");
giveMeTime(5,50,"PM");

function giveMeTime(hr,min,period){
  var str1 = "It's just after ";
  var str2 = "It's almost ";
  var str3 = " in the morning";
  var str4 = " in the evening";
  var mytime = "";

  if(min < 30){
    mytime = str1 + hr;
  }
  else{
    mytime = str2 + (hr + 1);
  }
  if(period === "AM"){
    mytime += str3;
  }
  else{
    mytime += str4;
  }
  console.log(mytime);
}
