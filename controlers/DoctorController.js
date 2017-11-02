// medecinController.js

var Doctor = require ("../models/DoctorModel")

// Afficher la liste des medecins
exports.medecin_list = function(req,res){
	res.send("NOT IMPLEMENTED: Doctor list")
}

// Affiche les details d'un medeicn specifique
exports.medecin_detail = function(req, res){
	res.send("NOT IMPLEMENTED: Doctor detail: " + req.params.id)
}

// Affiche 