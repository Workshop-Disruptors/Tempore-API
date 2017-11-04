// ./controllers/medecinController.js

// Récuperation du modèle medecin
const Doctor = require ("../models/DoctorModel")

// Récuperation de la librairie bodyParser
const bodyParser = require("body-parser");

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
	res.send("NOT IMPLEMENTED: Doctor detail: " + req.params.id)
};

// Demande de création d'un medecin depuis GET
exports.doctor_create_get = function(req, res){
	Doctor.findById(req.params.doctor_id, function(err, doctor){
		if (err){
			res.send(err);
		};
		res.json(doctor);
	});
};

// Création d'un médecin via POST
exports.doctor_create_post = function(req, res){
	// Crée un nouveau medecin selon le model
	var doctor = new Doctor();

	// Recupère les informations du medecin
	doctor.name = req.body.name;
	doctor.city = req.body.city;
	doctor.phone = req.body.phone;
	doctor.description = req.body.description;

	// Enregistrement du medecin dans la base de données
	doctor.save(function(err,doctor){
		if(err){
			res.send(err);
		}
		else {
			res.send("Vous venez d'ajouter une fiche médecin à Tempore")
		};	
	});
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
	res.send("NOT IMPLEMENTED: Doctor update GET")
};

// Mise à jour d'un medecin via PUT
exports.doctor_update_put = function(req, res){
	Doctor.findById(req.params.doctor_id, function(err, doctor) {
		if (err){
			res.send(err);
			}

		// Mise à jour des données du medecin
		doctor.nom = req.body.nom;
		doctor.adresse = req.body.adresse;
		doctor.tel = req.body.tel;
		doctor.description = req.body.description; 
		doctor.save(function(err){
			if(err){
				res.send(err);
			}
			else {
				res.json({message : 'Mise à jour des données médecin réalisée'});
			};
		});                
	});
};