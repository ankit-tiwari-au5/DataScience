var array = []
var counter = 0

function push() {
    var num = document.getElementById("coding").value
    
    array[counter] = num
    counter++
    console.log(array)
    print()
}
function pop() {
    var num = array[counter - 1]
    array.length--
    counter--
    print()
    return num
}

function print(){
    document.getElementById("2").value = ''
    for(i=0;i<array.length;i++){
        document.getElementById("2").value = document.getElementById("2").value + ' ' + array[i]
    }   
}