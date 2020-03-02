function unique(str) {
  var str = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = 1 + i; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(unique("arkesh"),unique("ansal"))