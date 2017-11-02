// Récuperation des librairies de bases permettant de faire un serveur d'API
const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

// Parametres du serveur
var hostname = "localhost";
var port = 3000;

// Options pour la connexion à la base de données
var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

// Adresse de la base de données
var urlmongo = "mongodb://test-user:test-password@ds133044.mlab.com:33044/disruptors"; 

// Copnnexion de l'API à la base de données
mongoose.Promise = global.Promise;
mongoose.connect(urlmongo, options, function(err) {
	if(err){
console.log("Erreur lors de la connexion à la base de données")
} else { console.log("Connexion à la base de données réussie")}
});

// Création d'un objet de type "express"
var app = express();

// Integration de bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Definiton de notre schéma de données
var medecinSchema = mongoose.Schema({
	nom: String,
	ville: String,
	tel: String,
	description: String
});

var Medecin = mongoose.model("Medecin",medecinSchema);


// Creation d'un Router pour faciliter le routage
var router = express.Router();

// Implementation pour la route /medecins
router.route("/medecins")
.get(function(req,res){
	Medecin.find(function(err, medecins){
		if (err){
			res.send(err); 
		}
		res.json(medecins); 
		
	})
})
.post(function(req,res){
	// Ajout d'un medecin suivant le model definit plus haut
	var medecin = new Medecin();

	medecin.nom = req.body.nom;
	medecin.ville = req.body.ville;
	medecin.tel = req.body.tel;
	medecin.description = req.body.description;

	// Enregistrement du medecin dans la base de données
	medecin.save(function(err,medecin){
		if(err){
			res.send(err);
		}
		else {
			res.send("Vous venez d'ajouter un médecin à Tempore")
		};	
	})
});

//Implementation pour un medecin specifique dans /medecins
router.route("/medecins/:medecin_id")
.get(function(req,res){
	 Medecin.findById(req.params.medecin_id, function(err, medecin) {
			if (err)
				res.send(err);
			res.json(medecin);
		});
})
.put(function(req,res){ 
	Medecin.findById(req.params.medecin_id, function(err, medecim) {
		if (err){
			res.send(err);
			}
		// Mise à jour des données du medecin
		medecin.nom = req.body.nom;
		medecin.adresse = req.body.adresse;
		medecin.tel = req.body.tel;
		medecin.description = req.body.description; 
		medecin.save(function(err){
		if(err){
			res.send(err);
			}
		// Si tout est ok
		res.json({message : 'Bravo, mise à jour des données OK'});
		});                
	});
})
.delete(function(req,res){ 
	Medecin.remove({_id: req.params.medecin_id}, function(err, medecin){
		if (err){
			res.send(err); 
		}
		res.json({message:"Bravo, medecin supprimé"}); 
	}); 
	
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
	console.log("Mon serveur fonctionne sur http://"+hostname+":"+port+"\n");
});
