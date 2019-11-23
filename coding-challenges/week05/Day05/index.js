let names = ["Ansal", "Vaibhav", "Divyam", "Vaibhav", "Dwarak"];
let numbers = [2, 3, 2, 4, 3, 5, 3];
frequency(names)
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
console.log(count)
}