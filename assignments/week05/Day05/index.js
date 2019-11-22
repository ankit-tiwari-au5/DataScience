var answer
$(document).ready(function () {

    var randomURL = `https://api.myjson.com/bins/11gmhm`

    var randomNumber = Math.floor(Math.random() * 10)
    $.ajax({
        url: randomURL,
        success: function (response) {


            $('#q1').append(response[randomNumber].question)

            answer = response[randomNumber].answer

            console.log(answer)
        },
        error: function () {
            alert('not able to fetch!')
        }

    })

    $("#fetchButton").on("click", function () {

        if (answer == $("input").val()) {

            $('#answer3').text("Correct Answer")

        }
        else {
            $('#answer3').text("Incorrect Answer")
        }



    })

    $(function () {
        var time = 30

        function redirect() {
            var id = setTimeout(redirect, 1000)
            $('#display1').html(time)
            if (time == 0) {

                clearTimeout(id)
                alert("time is over!")
                $("#fetchButton").off()
                $("#fetchButton").on("click", function () {
                    alert("unable to submit, \"Time is Over\" ")
                })
            }
            time--
        }
        redirect()

    })

})
