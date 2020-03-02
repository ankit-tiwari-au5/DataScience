var city = []
$(document).ready(function () {

    $.ajax({
        url: "https://raw.githubusercontent.com/attainu/attainu-eagle/master/coding-challenges/week-4/day-4/cities.json",
        dataType: "JSON",
        async: false,
        success: function (response) {
            for (i = 0; i < response.length; i++)
                city.push(response[i].name)
        },
    })
    $("#fetchButton").on("click", function
        () {
        var inp = $("#city_name").val().toUpperCase()
        console.log(inp[0])
        for (i = 0; i < city.length; i++) {
            if (city[i][0] == inp[0])

                $("#city_data").append('<li>' + city[i] + '</li>')

        }
    })
})