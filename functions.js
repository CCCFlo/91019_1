/*function initia(){
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
  var resu = new Array(4)
  resu[0] = player1
  resu[1] = player2
  resu[2] = player3
  resu[3] = extra
  console.log(resu)
  return resu
}*/



//J<br />O<br />K<br />E<br />R<br />B
function numToImg(n){
  if (n == 52){return 'JOB'}
  if (n == 53){return 'JOR'}
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
  //str = str.concat('<br />')
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

function dele(){
  console.log(cardsc)
  for (var i1 = 0; i1 < cardsc.length; i1++ ){
    console.log(cardsc[i1])
    document.getElementById(cardsc[i1]).style.display = "none"
    }
    cardsc = []
    var parent=document.getElementById("div2");
    var child=document.getElementById("cardschosed")
    var para=document.createElement("p");
    var node=document.createTextNode(cardsc)
    para.appendChild(node);
    para.setAttribute('id','cardschosed')
    parent.replaceChild(para,child)

}
