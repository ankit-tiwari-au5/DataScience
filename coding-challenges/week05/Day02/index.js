function isAnagram(wordA, wordB){
    wordA = wordA.toLowerCase().split('').sort().join('');
    wordB = wordB.toLowerCase().split('').sort().join('');
    return wordA === wordB;
}
console.log(isAnagram('binary','brainy'));
console.log(isAnagram('tiger','zebra'));