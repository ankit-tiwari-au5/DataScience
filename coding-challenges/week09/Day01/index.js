function countDuplicates(str){
var letters_count = {};
for (var i of str){
  if(!letters_count[i.toLowerCase()]) {
    letters_count[i.toLowerCase()] = 1;
  }
  else {
    letters_count[i.toLowerCase()]+=1;
  }
}
count = 0;
for(var j of Object.keys(letters_count)){
  if(letters_count[j] > 1) {
    count += 1;
  }
}
console.log(count)
}
console.log(countDuplicates("abcde"))
console.log(countDuplicates("aabbcde"))
console.log(countDuplicates("aabBcde"))
console.log(countDuplicates("indivisibility"))
console.log(countDuplicates("Indivisibilities"))
console.log(countDuplicates("aA11"))
console.log(countDuplicates("ABBA"))