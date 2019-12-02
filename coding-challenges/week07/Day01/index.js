var array =[[0, 1, 1 ,1],[0 ,0 ,1 ,1],[1, 1,1,1], [0, 0,0, 0]];
console.log(array)
var sum = -1;
max_index= -1;
var max_sum = -1;
for(var i = 0; i<array.length;i++){
  for(var j = 0; j<array[i].length;j++)
  {
    var temp_sum =0;
    if(array[i][j]===0){
      sum = temp_sum;
      break;
    }
    else{
      temp_sum +=1;
    }
    sum = temp_sum;
  }
  if(sum > max_sum){
    max_sum = sum;
    max_index = i;
  }
}
console.log(max_index)