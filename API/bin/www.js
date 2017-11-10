// ./bin/www

// Parametres du serveur
var hostname = "localhost";
var port = 3000;

// Récuperation de l'application
var app = require("../app");

// Demarage du serveur
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+hostname+":"+port+"\n");
});