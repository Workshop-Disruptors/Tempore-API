// ./models/MedecinModel.js
const mongoose = require("mongoose")

// Definiton de notre schéma de données
var doctorSchema = mongoose.Schema({
	mail: {
		type: String,
		unique: true,
		required: true,
		trim: true 
	},
	name: {
		type: String, 
		required: true,
		max: 100,
		trim: true
	},
	password: {
		type: String, 
		required: true,
		max: 100,
		trim: true
	},
	ville: {
		type : String, 
		max: 100,
		trim: true
	},
	tel: {
		type : Number,
		trim: true, 
		max: 10
	},
	description: {
		type : String
	}
});

// Propriétés vrituelles poour le modéle
// Definition du schéma d'URL
doctorSchema
.virtual('url')
.get(function () {
	return '/doctor/' + this._id;
});

// Export du modèle
module.exports = mongoose.model("Doctor",doctorSchema);