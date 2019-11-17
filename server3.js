var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var url = require('url');

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
var resu = new Array(4)
resu[0] = player1
resu[1] = player2
resu[2] = player3
resu[3] = extra
console.log(resu)

cont = 'var resu = new Array(4)\n'+'resu[0]='+'[' + resu[0].toString() + ']\n'
//+'resu[1]='+'[' + resu[1].toString() + ']\n'
//+'resu[2]='+'[' + resu[2].toString() + ']\n'
//+'resu[3]='+'[' + resu[3].toString() + ']\n'

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname == '/'){
    pathname = '/game1/game1.html'
    var type = 1;//区别html和js文件
    }
    pathname.replace(/\/home\/bitnami\//, "")
    console.log("Request for " + pathname + " received.");
    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
       if (err) {
          console.log(err);
          // HTTP 状态码: 404 : NOT FOUND
          // Content Type: text/html
          response.writeHead(404, {'Content-Type': 'text/html'});
       }else{
          // HTTP 状态码: 200 : OK
          // Content Type: text/html
          response.writeHead(200, {'Content-Type': 'text/html'});

          // 响应文件内容
          if (type == 1){response.write('<script>'+cont+'</script>')}
          response.write(data.toString());
          response.end();
          console.log('Finish the giving')
       }});
}).listen(80);


var io = require('socket.io').listen(server)
