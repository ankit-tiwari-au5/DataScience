function AtmPin(pin) {
    var Chars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    for (i = 0; i < pin.length; i++) {
        if (Chars.includes(pin[i]) === false) {
            return false;
        }
    }
    if (pin.length === 4 | pin.length === 6) {
        return true;
    }
    return false;
}
console.log(AtmPin("1345"))
console.log(AtmPin("134145"))
console.log(AtmPin("34145"))
