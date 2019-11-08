var num = 45
var cards = new Array(54)  //possible to delete
var player1 = new Array(17)
var player2 = new Array(17) //后期可以写对象
var player3 = new Array(17)
var extra = new Array(3)

for (var i = 0; i <= 53; i++){
  cards[i] = i;
}
for (var i = 0; i <= 16; i++){
  cards.sort(function(){ return 0.5 - Math.random()})
}
//console.log(cards)

for (var i = 0; i <= 16; i++){
  player1[i] = cards[i * 3]
  player2[i] = cards[i * 3 + 1]
  player3[i] = cards[i * 3 + 2]
}

for (var i = 0; i <= 2; i++){
  extra[i] = cards[51+i]
}

player1.sort(function(a,b){return(b-a)})
player2.sort(function(a,b){return(b-a)})
player3.sort(function(a,b){return(b-a)})

console.log(player1)
console.log(player2)
console.log(player3)
console.log(extra)

function numToImg(n){
  if (n == 52){return 'J<br />O<br />K<br />E<br />R<br />B'}
  if (n == 53){return 'J<br />O<br />K<br />E<br />R<br />R'}
  var str
  var str1
  var fig = Math.floor(n/4)
  switch (fig)
  {
    case 8:
      str = 'J'
      break
    case 9:
      str = 'Q'
      break
    case 10:
      str = 'K'
      break
    case 11:
      str = 'A'
      break
    case 12:
      str = '2'
      break
    default:
      str = (3 + fig).toString()
        }
  str = str.concat('<br />')

  var cat = n % 4

  switch (cat)
  {
    case 0:
      return str.concat('♠')
    case 1:
      return str.concat('♥')
    case 2:
      return str.concat('♣')
    case 3:
      return str.concat('♦')

  }
}
var cardHTML = ''

for (var i = 0; i <= 16; i++){
  console.log(numToImg(player1[i]))
  cardHTML = cardHTML.concat('<td id='+player1[i]+'>')
  cardHTML = cardHTML.concat(numToImg(player1[i]))
  cardHTML = cardHTML.concat('</td >')
}

document.write(cardHTML)

var cardHTML = ''

for (var i = 0; i <= 16; i++){
  console.log(numToImg(player2[i]))
  cardHTML = cardHTML.concat('<td>')
  cardHTML = cardHTML.concat(numToImg(player2[i]))
  cardHTML = cardHTML.concat('</td>')
}

document.write('</tr>')
document.write('<tr>')
document.write(cardHTML)

var cardHTML = ''

for (var i = 0; i <= 16; i++){
  console.log(numToImg(player3[i]))
  cardHTML = cardHTML.concat('<td>')
  cardHTML = cardHTML.concat(numToImg(player3[i]))
  cardHTML = cardHTML.concat('</td>')
}

document.write('</tr>')
document.write('<tr>')
document.write(cardHTML)

var cardHTML = ''

for (var i = 0; i <= 2; i++){
  console.log(numToImg(extra[i]))
  cardHTML = cardHTML.concat('<td>')
  cardHTML = cardHTML.concat(numToImg(extra[i]))
  cardHTML = cardHTML.concat('</td>')
}

document.write('</tr>')
document.write('<tr>')
document.write(cardHTML)
