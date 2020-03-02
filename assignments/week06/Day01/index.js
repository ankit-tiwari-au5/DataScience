var city1
$(document).ready(function () {

    $.ajax({
        url: "https://raw.githubusercontent.com/attainu/attainu-eagle/master/coding-challenges/week-4/day-4/cities.json",
        dataType: "JSON",
        async: false,
        success: function (response) {

            city1 = response
        },
    })
    console.log(city1)
    $("#fetchButton").on("click", function
        () {
        var inp = $("#city_name").val()
        console.log(inp[0])
        for (i = 0; i < city1.length; i++) {
            if (city1[i].state == inp)

                $("#city_data").append('<li class="text-white">' + city1[i].name + '</li>')

        }
    })

})