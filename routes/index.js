//  ./routes/index.js

// Recuperation des librairies de base
var express= require("express");
var router = express.Router();

router.get("/", function(req,res){
//	res.redirect("/medecin");
res.send("Bienvenue sur Tempore");
});

module.exports = router;