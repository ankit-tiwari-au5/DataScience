function atmPin(pin) {
    var len = pin.length;
    if (len != 4 && len != 6) {
        return false;
    }
    for (var char of pin) {
        if (isNaN(char)) {
            return false;
        }
    }
    return true;
}
console.log(atmPin("1345"))
console.log(atmPin("134145"))
console.log(atmPin("34145"))