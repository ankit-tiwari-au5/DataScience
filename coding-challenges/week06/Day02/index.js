let numbers = [1, 2, 2, 3, 4, 5, 6, 6, 7];
frequency(numbers)
function frequency(array){
var count ={};
    for (var item of array){
    if(count[item]) {
      count[item] += 1;
    }
else
{
  count[item]=1;
}
}
for(item of Object.keys(count)){
  console.log(item)
}
}