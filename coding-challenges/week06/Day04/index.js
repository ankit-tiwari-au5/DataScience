var array = [1,2,5,7,4,6,3];
var sum = 7
var result=[]
function paired_sum(sum,array){
  for(let i=0; i<array.length-1;i++){
    for(let j=i+1;j<array.length;j++)
  {
    if (array[i] + array[j]==sum){
      result.push([array[i],array[j]]);
    }
  }
  }
  return(result);
}
console.log(paired_sum(sum,array));