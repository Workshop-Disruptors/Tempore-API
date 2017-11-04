// ./routes/doctor.js

// Recuperation des librairies de base
var express= require("express");
var router = express.Router();

// Recuperation du module controller doctor
var doctor_controller = require("../controllers/doctorController");

/// DOCTOR ROUTES ///

/* GET | Page d'accueil */ 
router.get("/", doctor_controller.index);

/*  GET | Demande de creation d'un medecin */
router.get("/create", doctor_controller.doctor_create_get);

/*  POST | Demande de creation d'un medecin */
router.post("/create", doctor_controller.doctor_create_post);

/* GET | Demande de suppression d'un medecin */
router.get("/:id/delete", doctor_controller.doctor_remove_get);

/* DELETE | Demande de suppression d'un medecin */
router.delete("/:id/delete", doctor_controller.doctor_remove_delete);

/* GET | Demande de mis à jour d'un medecin */
router.get("/:id/update", doctor_controller.doctor_update_get);

/* PUT | Demande de mis à jour d'un medecin */
router.post("/:id/update", doctor_controller.doctor_update_put);

/* GET | Demande d'information pour un medecin */
router.get("/:id", doctor_controller.doctor_detail);

/* GET | Demande de la liste de tous les medecins */
router.get("/doctors", doctor_controller.doctor_list);

module.exports = router;