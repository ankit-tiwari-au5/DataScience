$(document).ready(function () {
    var array;
    $.ajax({
        type: "get",
        async: false,
        url: "http://www.json-generator.com/api/json/get/cfAnOGoUde?indent=2",
        dataType: "JSON",
        success: function (response) {

            array = response
        }
    })
    console.log(array)
    append()
    function append() {
        array.forEach(function (a) {
            $('.products').append('<div class="row my-5"/>')
            $('.row').last().append('<div class="col-md-3"/>')
            $('.col-md-3').last().append('<img src="' + a.image + '" style = "height:200px"/>')
            $('.row').last().append('<div class="col-md-6"/>')
            $('.col-md-6').last().append('<h6>' + a.name + '</h6>')
            if (a.rating >= 4) {
                $('.col-md-6').last().append('<p class="bg-success text-center text-light" style = "width: 30px">' + a.rating + '</p>')
            }
            else if (a.rating < 4 && a.rating >= 3) {
                $('.col-md-6').last().append('<p class="bg-warning text-center text-light" style = "width: 30px">' + a.rating + '</p>')
            }
            else if (a.rating < 3) {
                $('.col-md-6').last().append('<p class="bg-danger text-center text-light" style = "width: 30px">' + a.rating + '</p>')
            }
            $('.col-md-6').last().append('<ul/>')

            a.features.forEach(function (li) {

                $('ul').last().append('<li>' + li + '</li>')
            })
            $('.row').last().append('<div class="col-md-3"/>')
            $('.col-md-3').last().append('<h6> Rs. ' + a.discounted_price + '</h6>')
            $('.col-md-3').last().append('<p><strike> Rs. ' + a.original_price + '</strike></p>')




        });
    }
    $("button").click(function () {
        var min = $("#min").val()
        var max = $("#max").val()
        var arr = array.filter(function (a) {
            if (max > min) {
                return a.discounted_price >= min && a.discounted_price <= max
            }

        })
        $(".products").empty();
        arr.forEach(function (a) {
            $('.products').append('<div class="row my-5"/>')
            $('.row').last().append('<div class="col-md-3"/>')
            $('.col-md-3').last().append('<img src="' + a.image + '" style = "height:200px"/>')
            $('.row').last().append('<div class="col-md-6"/>')
            $('.col-md-6').last().append('<h6>' + a.name + '</h6>')
            if (a.rating >= 4) {
                $('.col-md-6').last().append('<p class="bg-success text-center text-light" style = "width: 30px">' + a.rating + '</p>')
            }
            else if (a.rating < 4 && a.rating >= 3) {
                $('.col-md-6').last().append('<p class="bg-warning text-center text-light" style = "width: 30px">' + a.rating + '</p>')
            }
            else if (a.rating < 3) {
                $('.col-md-6').last().append('<p class="bg-danger text-center text-light" style = "width: 30px">' + a.rating + '</p>')
            }
            $('.col-md-6').last().append('<ul/>')

            a.features.forEach(function (li) {

                $('ul').last().append('<li>' + li + '</li>')
            })
            $('.row').last().append('<div class="col-md-3"/>')
            $('.col-md-3').last().append('<h6> Rs. ' + a.discounted_price + '</h6>')
            $('.col-md-3').last().append('<p><strike> Rs. ' + a.original_price + '</strike></p>')




        });


    })

})

