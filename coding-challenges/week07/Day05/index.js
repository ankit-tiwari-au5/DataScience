var a = [5, 2, 8, 9, 4, 7]
var b = [3, 2, 9, 5, 7]
var count = 0
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {

            count++;
        }

    }

}
console.log(count)