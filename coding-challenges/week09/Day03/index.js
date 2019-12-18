var str = " 1 2 3 4 5 ";
var arrNumStr = str.split(" ")
var arrNum = [];
for(var char of arrNumStr){
  if(char !== ""){
    arrNum.push(Number(char));
    
  }
  
}

arrNum.sort()
console.log(arrNum[0],arrNum[arrNum.length-1])