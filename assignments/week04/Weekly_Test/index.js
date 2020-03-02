var students = [
    { name: "Divyam", age: 29 },
    { name: "Ansal", age: 28 },
    { name: "Arkesh", age: 27 },
    { name: "Gopi", age: 27 },
    { name: "Nishant", age: 23 },
    { name: "Rabeen", age: 30 },
    { name: "Ruhan", age: 20 },
    { name: "Sadab", age: 21 },
];


function mainFunction() {
    var filtered = students.filter(function (value) {
        if (value.age >= 25) {
            return true;

        }
    })
    console.log(filtered)

    addEmail()
    function addEmail() {
        students.forEach(function (b) {
            b.email = b.name + "@gmail.com"
        })
        console.log(students)
    }

    sortObjects()
    function sortObjects() {
        students.sort(function (a, b) {
            return b.age - a.age;

        })
        console.log(students)
    }

    addStudent()
    function addStudent() {
        students.splice(2, 0, { name: 'Ankit', age: 25 })
    }
    console.log(students)
    addEmail()


    function printTriangle(n) {

        for (var i = 1; i <= n; i++) {
            var row = '';

            for (var j = 1; j <= i; j++) {
                row += '*';
            }

            console.log(row);
        }
    }
    printTriangle(9)
}
mainFunction()