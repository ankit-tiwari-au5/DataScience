var sumOfDigits = 123;
var sum = 0;
for(var i = sumOfDigits; i > 0; i = (i / 10) >> 0) {
    sum += i % 10;
   }
console.log(sum);