$(document).ready(function(){

    var userURL = 'https://randomuser.me/api/'
 
     $('#fetchButton').on('click',function(){
 
         console.log('button clicked!')
 
         $.ajax({url:userURL,
                 success: function(response){
                     
                     $('#imageDiv').append('<img src='+response.results[0].picture.medium+' alt="User Data Uploading">')

                     
                     $('#imageDiv').append('<ul>')
                     $('#imageDiv').append('<li>Email:'+response.results[0].email+'</li>')
                     $('#imageDiv').append('<li>Gender:'+response.results[0].gender+'</li>')
                     $('#imageDiv').append('<li>Nationality:'+response.results[0].nat+'</li>')
                     $('#imageDiv').append('<li>Phone:'+response.results[0].phone+'</li></ul>')

                     console.log(response)
                 },
                 error: function(){
                     alert('not able to fetch!')
                 }
         
         })
 
     })
 
 })