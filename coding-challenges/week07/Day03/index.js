var sumOfDigits = 123;
var sum = 0;
while (sumOfDigits) {
    sum += sumOfDigits % 10;
   sumOfDigits= sumOfDigits/10 >> 0
    }
console.log(sum);