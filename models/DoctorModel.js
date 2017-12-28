// ./models/MedecinModel.js

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');


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
		trim: true
	},
	password: {
		type: String, 
		required: true,
		trim: true
	},
	city: {
		type : String, 
		max: 100,
		trim: true
	},
	tel: {
		type : Number
	},
	description: {
		type : String,
		trim: true
	},
	delay: {
		type : Number,
		trim : true
	}
});

doctorSchema.plugin(uniqueValidator);

// Authentification et comparaison à la base de données
doctorSchema.statics.authenticate = function (mail, password, callback) {

	var Doctor=this

    Doctor.findOne({ mail: mail })
    .exec(function (err, doctor) {
      if (err) {
        return callback(err)
      } else if (!doctor) {
        var err = new Error('Médecin introuvable.');
        err.message = "Médecin introuvable.";
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, doctor.password, function (err, result) {
        if (result === true) {
          return callback(null, doctor);
        } else {
        var err = new Error('Mot de passe incorrect.');
        err.message = "Mot de passe incorrect.";
        err.status = 401;
        return callback(err);
        }
      })
    });
}


//hashing a password before saving it to the database
doctorSchema.pre('save', function (next) {
  var doctor = this;
  bcrypt.hash(doctor.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    doctor.password = hash;
    next();
  })
});

doctorSchema.pre('update', function (next) {
  var doctor = this;
  console.log("update",doctor.password)
  bcrypt.hash(doctor.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    doctor.password = hash;
    next();
  })
});


// Export du modèle
module.exports = mongoose.model("Doctor",doctorSchema);