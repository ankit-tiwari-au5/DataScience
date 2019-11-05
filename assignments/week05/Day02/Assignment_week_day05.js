$('body').append('<table border><tr><tr><tr><tr><thead><th></th><th></th><th></th><th></th></thead></tr></tr></tr></tr></table>')
$('th').eq(0).append('First name')
$('th').eq(1).append('Last name')
$('th').eq(2).append('Email')
$('th').eq(3).append('Phone')

$('tr').eq(0).append('<td>Ankit</td>')
$('tr').eq(0).append('<td>Tiwari</td>')
$('tr').eq(0).append('<td>at7666.at@gmail.com</td>')
$('tr').eq(0).append('<td>8625924677</td>')

$('tr').eq(1).append('<td>Akshay</td>')
$('tr').eq(1).append('<td>Tiwari</td>')
$('tr').eq(1).append('<td>akshay@gmail.com</td>')
$('tr').eq(1).append('<td>8329330379</td>')

$('tr').eq(2).append('<td>Arun</td>')
$('tr').eq(2).append('<td>Jadhav</td>')
$('tr').eq(2).append('<td>arun.jadhav@gmail.com</td>')
$('tr').eq(2).append('<td>5515199636</td>')

$('tr').eq(3).append('<td>Anuj</td>')
$('tr').eq(3).append('<td>Nair</td>')
$('tr').eq(3).append('<td>Nair@gmail.com</td>')
$('tr').eq(3).append('<td>8926423233</td>')



$('td').on('mouseover', function(){$(this).css('color', 'red')})
$('td').on('mouseout', function(){$(this).css('color', 'blue')})