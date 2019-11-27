# 91019_1

This project is about a traditional chinese game with cards.
game1.html is the web page presented to the users.
server3.js is the server of this project, written by NodeJS.
server_functions.js are functions used in game1.html.
style.css will make the site more beautiful.

Other documents are used for experiment, and not important.

Procedures:
1.Run server3.js
2.Server will execute an algorithm to distribute the 54 cards into 4 piles,17+17+17+3.
  The three seventeen-card will distributed to three players and the last three cards will be used later.
3.The players will received the website in which there are their cards.
------------------------------------These are mission i have already finished----------------------------
4.The players will grab for the last three cards, and who finally get them will have 20 cards.(20+17+17).
5.Three players will play cards according to the order and the rules.
  When a player have played the cards, the browser will sent the information to the server.
  The server will send it to other players with help of socket.
6.The first player who haven't any card will be the winner.
