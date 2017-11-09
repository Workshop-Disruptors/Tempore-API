
// ./controllers/medecinController.js

// Récuperation du modèle medecin
const Doctor = require ("../models/DoctorModel");

// Récuperation des librairies bodyParser et bcrypt
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

// Home page médecin
exports.index = function(req, res) {
	res.send('NOT IMPLEMENTED: Site Home Page');
};

// Afficher la liste des medecins
exports.doctor_list = function(req, res){
	Doctor.find(function(err, doctors){
		if (err){
			res.send(err); 
		};
		res.json(doctors);		
	});
};

// Affiche les details d'un medecin specifique
exports.doctor_detail = function(req, res){
	Doctor.findById(req.params.doctor_id, function(err, doctor){
		if (err){
			res.send(err);
		};
		res.json(doctor);
	});
};

// Demande de création d'un medecin depuis GET
exports.doctor_create_get = function(req, res){
	res.send('NOT IMPLEMENTED: Doctor create GET');

};

// Création d'un médecin via POST
exports.doctor_create_post = function(req, res){
	// Crée un nouveau medecin selon le model

	if(req.body.password!==req.body.passwordConf){
		res.send("Mots de passe differents");
	} else {

		// fonction create et save
		function create (callback){
			var doctor = new Doctor();

			doctor.mail = req.body.mail;
			doctor.name = req.body.name;
			doctor.city = req.body.city;
			doctor.phone = req.body.phone;
			doctor.description = req.body.description;

			var saltRounds = 10;

			bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
				if (err){
					console.log(err);
				} else {
					doctor.password = hash;
					return callback(doctor)
				};
			});
		};

		function save (doctor) {
// Enregistrement du medecin dans la base de données
doctor.save(function(err){
	if(err){
		res.send(err);
	} else {
		res.send("Vous venez d'ajouter une fiche médecin à Tempore");
	};	
});
};

create(save);
};

};

// Demande de suppression d'un médecin depuis GET
exports.doctor_remove_get = function(req, res){
	res.send("NOT IMPLEMENTED: Doctor delete GET")
};

// Supprime un medecin via DELETE
exports.doctor_remove_delete = function(req, res){
	Doctor.remove({_id: req.params.doctor_id}, function(err, doctor){
		if (err){
			res.send(err); 
		}
		res.json({message:"Données médecin supprimées"}); 
	}); 
};

// Demande de mise à jour d'un medecin depuis GET
exports.doctor_update_get = function(req, res){
	Doctor.findById(req.params.doctor_id, function(err, doctor) {

		if (doctor === {}) {
			res.send("Pas de fiche sous cet identifiant.");
		} else {
			res.send("NOT IMPLEMENTED: Doctor update GET")
		};
	});
};

// Mise à jour d'un medecin via PUT
exports.doctor_update_put = function(req, res){
	Doctor.findById(req.params.doctor_id, function(err, doctor) {

		if(req.body.password!==req.body.passwordConf){
			res.send("Mots de passe differents");
		} else {

// fonction create et save
function create (callback){
	var doctor = new Doctor();

	doctor.mail = req.body.mail;
	doctor.name = req.body.name;
	doctor.city = req.body.city;
	doctor.phone = req.body.phone;
	doctor.description = req.body.description;

	var saltRounds = 10;

	bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
		if (err){
			console.log(err);
		} else {
			doctor.password = hash;
			return callback(doctor)
		};
	});
};

function save (doctor) {
// Enregistrement du medecin dans la base de données
doctor.save(function(err){
	if(err){
		res.send(err);
	} else {
		res.send("Vous venez de mettre a jour une fiche médecin dans Tempore");
	};	
});
};

create(save)

};
});
};