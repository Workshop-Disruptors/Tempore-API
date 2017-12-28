
// ./controllers/medecinController.js

// Récuperation du modèle medecin
const Doctor = require ("../models/DoctorModel");

// Home page médecin
exports.index = function(req, res) {
	res.send('Home Page /doctor');
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
exports.doctor_details = function(req, res){
	Doctor.findById(req.params.doctor_id, function(err, doctor){
		if (err){
			res.send(err);
		};
		res.json(doctor);
	});
};

// Création d'un médecin via POST
exports.doctor_register_post = function(req, res, next){
	// Crée un nouveau medecin selon le model

  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Mots de passe differents.');
    err.status = 400;
    err.message = "Mots de passe differents";
    return next(err);
  }

 // if (req.body.mail && req.body.name && req.body.password) {

    var doctordata = {
      mail: req.body.mail,
      name: req.body.name,
      password: req.body.password,
      city: req.body.city,
      tel: req.body.tel,
      description: req.body.description,
      delay: "0"
    }

    Doctor.create(doctordata, function (error, doctor) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = doctor._id;
    return res.json("Nouveau médecin ajouté !");
      }
    });
};

// Mis à jour d'un médecin
exports.doctor_update = function(req, res, next){
  // Crée un nouveau medecin selon le model

  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Mots de passe differents.');
    err.status = 400;
    err.message = "Mots de passe differents";
    return next(err);
  }

 // if (req.body.mail && req.body.name && req.body.password) {

    var doctordata = {
      name: req.body.name,
      password: req.body.password,
      city: req.body.city,
      tel: req.body.tel,
      description: req.body.description,
      delay: "0"
    }

    Doctor.update(doctordata, function (error, doctor) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = doctor._id;
    return res.json("Médecin mis à jour !");
      }
    });
};

// Connection d'un médecin via POST
exports.doctor_login_post = function(req, res, next){

 	if (req.body.logmail && req.body.logpassword) {
    Doctor.authenticate(req.body.logmail, req.body.logpassword, function (error, doctor) {
      console.log(error, doctor)
        if (doctor) {
        req.session.userId = doctor._id;
        console.log("login", req.session);
        return res.json("Connecté !");
      } else {
      return next(error);
      }
    });
  } else {
    var err = new Error('Tous les chanps sont requis.');
    err.status = 400;
    return next(err);
  }
};


// GET route after registering
exports.doctor_profile_get = function(req, res, next){
  Doctor.findById(req.session.userId)
    .exec(function (error, doctor) {
      if (error) {
        return next(error);
      } else {
        if (doctor === null) {
          var err = new Error('Non autorisé ! Revenez en arrière !');
          err.status = 400;
          return next(err);
        } else {
          return res.json(doctor)
        }
      }
    });
};


// POST route after registering
exports.doctor_profile_post = function(req, res, next){
  Doctor.findByIdAndUpdate(req.session.userId, { delay: req.body.delay }, function (err, doctor) {
      if (err) {
        return next(err);
      } else if (doctor === null) {
          var err = new Error('Non autorisé ! Revenez en arrière !');
          err.status = 400;
          return next(err);
        } else {
          return res.json("done");
        }
});
};

// Supprime un medecin via DELETE
exports.doctor_remove_delete = function(req, res){
		res.send("Non implementé pour")
};

// Deconnexion via GET
exports.doctor_logout = function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.json("Déconnecté");
      }
    });
  }
};
