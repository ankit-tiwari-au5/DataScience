function booleanXO(str) {
    str = str.toLowerCase();
    var countX = 0;
    var countO = 0;
    
    for(var i=0; i<str.length; i++){
      if(str[i] === 'x'){
        countX++;
      } else if(str[i] === 'o'){
        countO++;
      }
    }
    
    if(countX === countO){
      return true;
    }
    return false;
}
console.log(booleanXO('ooxx'))
console.log(booleanXO("xooxx"))
console.log(booleanXO("ooxXm"))
console.log(booleanXO("zpzpzpp"))
console.log(booleanXO("zzoo"))