var numbers= [68,97,45,22,59,7,2,89]
function largest(numbers){
  var max = numbers[0];
  for(i=0;i<numbers.length;i++){
    if(numbers[i]>max){
      max=numbers[i]
    }

  }
  return max;
}
function smallest(numbers){
  var min = numbers[0];
  for(i=0;i<numbers.length;i++){
    if(numbers[i]<min){
      min=numbers[i]
    }
  }
  return min;
}
console.log(largest(numbers),(smallest(numbers)))
