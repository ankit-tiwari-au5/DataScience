function countDuplicates(str){
str = str.toLowerCase();
var letters_count = {};
for (var i of str){
  if(!letters_count[i.toLowerCase()]) {
    letters_count[i.toLowerCase()] = 1;
  }
  else {
    letters_count[i.toLowerCase()]+=1;
  }
}
var result = "";
for (var char of str) {
  if (letters_count[char] > 1) {
    result += ")";
  }
  else {
    result += "(";
  }
}
console.log(result);
}
console.log(countDuplicates("din")); 
console.log(countDuplicates("recede"));
console.log(countDuplicates("Success"));
console.log(countDuplicates("(( @"));