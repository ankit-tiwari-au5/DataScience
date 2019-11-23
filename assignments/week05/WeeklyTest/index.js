pair = [];
var nameval;
var ageval;

 
$("#name").on("blur",function(){
    var patt1 = /[0-9]/g
   nameval = $("#name").val()
  var z = nameval.match(patt1)
 
  if (z != null){
    $('#alertdata').html('<div class="alert alert-warning alert-dismissable"><button class="close" data-dismiss="alert">+</button>Enter the name in correct format</div>')
     $("#name").val("")
     }
  for (i = 0; i < pair.length; i++) {
    if (pair[i].name == nameval) {
    $('#alertdata').html('<div class="alert alert-warning alert-dismissable"><button class="close" data-dismiss="alert">+</button>Name already exists</div>')
     $("#name").val('')
      }
  }
 
})

$("#age").on("blur",function(){
  ageval= $("#age").val()
   if (ageval < 15){
  $('#alertdata').html('<div class="alert alert-warning alert-dismissable"><button class="close" data-dismiss="alert">+</button>kindly enter the age above 15 if applicable</div>')
  $("#age").val('')
  }
})

$("#fetchButton").on("click",function(){
  if($("#name").val()==""||$("#age").val()==""){
     $('#alertdata').html('<div class="alert alert-warning alert-dismissable"><button class="close" data-dismiss="alert">+</button>Duplicate Records</div>')
     }
     else{
      pair.push({name:nameval,age:ageval})
     $('#alertdata').html('<div class="alert alert-succes alert-dismissable"><button class="close" data-dismiss="alert">+</button>Details added successfully</div>')
       $("#name").val('')
     $("#age").val('')
     $("#fetchlist").append('<li class="list-group-item list-group-item-info"><strong>'+nameval+' ,</strong><i>'+ageval+'</i></li>')
     send_data()
     }


function send_data(){
  var new_url="https://postman-echo.com/post"
  $.ajax({
  url: new_url,
  method:"POST",
  data: {name:nameval,age:ageval},
  success: function(response){
    console.log("hello")
    console.log(response)
  },

  })

}
})