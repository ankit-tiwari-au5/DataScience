function isPalindrome(str){
  var reversed ='';
  for(var char of str){
    reversed = char + reversed;
  }
  return reversed === str;
}
console.log(isPalindrome("abba"))
console.log(isPalindrome("abbc"))
console.log(isPalindrome("madam"))
console.log(isPalindrome("radar"))
console.log(isPalindrome("apple"))