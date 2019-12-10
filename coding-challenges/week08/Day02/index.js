var array = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]
var temp,i=0,j=array.length-1;
console.log(j)
while(j>i){
  if(array[i]==0){
    while(array[j]==0){
      j--
    }
    temp= array[i]
    array[i]=array[j]
    array[j]=temp
  }
  i++
}
console.log(array)