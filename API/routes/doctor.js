// ./routes/doctor.js

// Recuperation des librairies de base
var express= require("express");
var router = express.Router();

// Recuperation du module controller doctor
var doctor_controller = require("../controllers/doctorController");

/// DOCTOR ROUTES ///

/* GET | Page d'accueil */ 
router.get("/", doctor_controller.index);

/*  POST | Creation d'un medecin */
router.post("/register", doctor_controller.doctor_register_post);

/*  POST | Connection d'un medecin */
router.post("/login", doctor_controller.doctor_login_post);

/* GET | Demande le profile d'un medecin */
router.get("/list", doctor_controller.doctor_list);

/* GET | Demande la liste de tous les medecins */
router.get("/profile", doctor_controller.doctor_profile);

/* DELETE | Demande de suppression d'un medecin */
router.delete("/:id/delete", doctor_controller.doctor_remove_delete);

/* PUT | Demande de mis à jour d'un medecin */
router.put("/:id/update", doctor_controller.doctor_update_put);

/* GET | Demande d'information pour un medecin */
router.get("/:id", doctor_controller.doctor_details);

module.exports = router;