// Récuperation des librairies de bases permettant de faire un serveur d'API
var express = require ("express");
var bodyParser = require("body-parser");
var moongose = require("mongoose")

// Parametres du serveur
var hostname = "localhost";
var port = 3000;

// Création d'un objet de type "express"
var app = express();

// Integration de bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Definiton de notre schéma de données

// Creation d'un Router pour faciliter le routage
var router = express.Router();


// Implementation pour le route /medecin
router.route("/medecin")
// GET, POST, PUT, DELETE
.get(function(req,res){
	res.send("Liste tous les medecins");
})
.post(function(req,res){
	res.json({message : "Vous avez ajouté un nouveau medecin à la liste",
		nom : req.body.nom,
		ville : req.body.ville,
		method: req.method});
});

//Implementation pour un medecin specifique
router.route("/medecin/:idMedecin")
.get(function(req,res){
	res.send("Vous acceder aux information du medecin "+req.params.idMedecin);
})
.put(function(req,res){
	res.send("Vous souhaitez modifier les informations du medecin "+req.params.idMedecin);
})
.get(function(req,res){
	res.send("Vous souhaitez supprimer de la liste le medecin "+req.params.idMedecin);
});

// Implementation à la racine
router.route("/")
.all(function(req,res){
	res.send("Bienvenue sur Tempore");
});

// Initialisation du serveur avec le routage

app.use(router);

//Demarage du serveur
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+hostname+":"+port+"\n")
});