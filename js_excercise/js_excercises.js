// function booyah1() {
//     alert('BOOYAH!')
// }
// let booyah2 = new function () {
//     alert('BOOYAH!')
// }
// function testQuestion3() {
//     setTimeout(booyah1, 2000);
//     setTimeout(booyah2(), 2000);
// }
var myfunc = function(a, x) {
    return a * x;
   };
   var x = myfunc(2, 3);
   var y = myfunc;
   console.log(x);
   console.log(y(2,3));
   //alert(x);
   //alert(y(2,3));