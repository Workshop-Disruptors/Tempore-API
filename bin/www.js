// ./bin/www

// Parametres du serveur
var hostname = "localhost";
var port = 3000;

// Récuperation de l'application
var app = require("../app");

// Demarage du serveur

var server = app.listen(process.env.PORT || 8080, function () {
var port = server.address().port;
console.log("App now running on port", port);
/* app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+hostname+":"+port+"\n");*/
});