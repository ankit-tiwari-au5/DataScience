function login(){
var userId1 = document.getElementById('username').value + document.getElementById('password').value;
var userId2 = ('ankit@gmail.com') + ('Abcd@123');
if (userId1 == userId2) {
var correct = document.getElementById('checkin').innerHTML = 'Login Successfully';
}
else {
var incorrect = document.getElementById('checkin').innerHTML = 'Login Failed';
}
}