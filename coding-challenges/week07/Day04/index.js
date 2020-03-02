var numbers = [2, 8, 7, 1, 5]
for (i = 0; i < numbers.length; i++) {
    count = 0;
    for (j = 0; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            count++;
        }
        if (count >= 2) {
            console.log(numbers[i])
            break;
        }
    }
}