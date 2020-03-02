function secondsToHours(seconds)
{

var nhours = Math.floor((seconds % 86400) / 3600);

var nminutes = Math.floor(((seconds % 86400) % 3600) / 60);

var nseconds = ((seconds % 86400) % 3600) % 60;

console.log(  nhours + " hours " + nminutes + " minutes " + nseconds + " seconds");

}
secondsToHours(126)
secondsToHours(45)
secondsToHours(3700)