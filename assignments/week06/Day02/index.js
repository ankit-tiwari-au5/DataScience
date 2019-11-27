$(document).ready(function () {
    var books = []
    $.ajax({
        url: "https://raw.githubusercontent.com/attainu/attainu-flamingo/master/assignments/data/books.json",
        async: false,
        dataType: "JSON",
        success: function (response) {
            books = response
        },
    })
    console.log(books)
    $("#fetchButton").on("click", function () {

        $("#table_data tr").remove();

        var tableHead = '<thead><tr><th scope="col">Title</th><th scope="col">Author</th><th scope="col">Country</th><th scope="col">Language</th><th scope="col">Link</th><th scope="col">Pages</th><th scope="col">Year</th></tr></thead>'
        $('#table_data').append(tableHead)

        var InputName = $('#lang').val()
        var b = new RegExp('^' + InputName, 'i')
        books.forEach(function (element) {
            var result = element.language.match(b)
            if (result != null) {
                $('#table_data').append('<tr><td>' + element.title + '</td><td>' + element.author + '</td><td>' + element.country + '</td><td>' + element.language + '</td><td>' + element.link + '</td><td>' + element.pages + '</td><td>' + element.year + '</td></tr>')
            }
        })
    })
})