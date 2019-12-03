var numbers = [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15]
var arr= []
var missing=[]
numbers.sort(function(a, b){return a-b})
var max = Math.max(...numbers)
console.log(max)
for(var i=0;i<max;i++){
    var n = i+1;
   arr[i]=n;
  }
console.log(arr)
console.log(numbers)
function missingNumbers(numbers){
 var k=0;l=0;
 for(var j=0;j<max;j++){
   if(arr[j]!=numbers[k]){
     missing[l]=j+1;
     l++;
   }
   else
      k++;
 }
}
missingNumbers(numbers)
console.log(missing)