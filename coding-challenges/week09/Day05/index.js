var arr = [1,2,3,4,5]
var min_index = -1;
var min_val = Number.POSITIVE_INFINITY;
for (var index = 0; index<arr.length; index++){
  if(arr[index] < min_val){
    min_val = arr[index];
    min_index = index;
  }
}
return_arr = [];
for(var i = 0 ; i<arr.length; i++){
  if(i !==min_index){
    return_arr.push(arr[i])
  }
}
console.log(return_arr)