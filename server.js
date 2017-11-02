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

// Import du modele doctor
var Doctor = require('./models/DoctorModel')

// Creation d'un Router pour faciliter le routage
var router = express.Router();

// Implementation pour la route /doctors
router.route("/doctors")
.get(function(req,res){
	Doctor.find(function(err, doctors){
		if (err){
			res.send(err); 
		}
		res.json(doctors); 
		
	})
})
.post(function(req,res){
	// Ajout d'un doctor suivant le model definit plus haut
	var doctor = new Doctor();

	doctor.name = req.body.name;
	doctor.city = req.body.city;
	doctor.phone = req.body.phone;
	doctor.description = req.body.description;

	// Enregistrement du doctor dans la base de données
	doctor.save(function(err,doctor){
		if(err){
			res.send(err);
		}
		else {
			res.send("Vous venez d'ajouter une fiche médecin à Tempore")
		};	
	})
});

// Implementation pour un doctor specifique dans /doctors
router.route("/doctors/:doctor_id")
.get(function(req,res){
	 Doctor.findById(req.params.doctor_id, function(err, doctor) {
			if (err)
				res.send(err);
			res.json(doctor);
		});
})
.put(function(req,res){ 
	Doctor.findById(req.params.doctor_id, function(err, medecim) {
		if (err){
			res.send(err);
			}
		// Mise à jour des données du doctor
		doctor.nom = req.body.nom;
		doctor.adresse = req.body.adresse;
		doctor.tel = req.body.tel;
		doctor.description = req.body.description; 
		doctor.save(function(err){
		if(err){
			res.send(err);
			}
		// Si tout est ok
		res.json({message : 'Mise à jour des données médecin réalisée'});
		});                
	});
})
.delete(function(req,res){ 
	Doctor.remove({_id: req.params.doctor_id}, function(err, doctor){
		if (err){
			res.send(err); 
		}
		res.json({message:"Données médecin supprimées"}); 
	}); 
	
});

// Implementation à la racine
router.route("/")
.all(function(req,res){
	res.send("Bienvenue sur Tempore");
});

// Initialisation du serveur avec le routage
app.use(router);

// Demarage du serveur
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+hostname+":"+port+"\n");
});
