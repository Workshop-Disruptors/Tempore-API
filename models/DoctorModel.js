// MedecinModel.js
const mongoose = require("mongoose")

// Definiton de notre schéma de données
var medecinSchema = mongoose.Schema({
	nom: {type : String, required: true, max: 100},
	ville: {type : String, required: true, max: 100},
	tel: {type : Number, required: true, max: 10},
	description: {type : String}
});

module.exports = mongoose.model("Medecin",medecinSchema);
