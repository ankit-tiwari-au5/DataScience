let names = ["Ansal", "Vaibhav", "Divyam", "Vaibhav", "Dwarak"]
let arr = [2, 3, 2, 4, 3, 5, 3]
occurances(names)
occurances(arr)
function occurances (array){
var count = [];
var msg = '';
for (var i = 0; i < array.length; i++)
{
if (count[array[i]]) 
{
count[array[i]] += 1;
} 
else 
{
count[array[i]] = 1;
}
}
for (i in count) msg += i + ' occurs ' + count[i] + ' times\n';
console.log(msg);
}