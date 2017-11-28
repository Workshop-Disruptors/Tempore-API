//./app.js

// Récuperation des librairies
const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


// Récuperation des routes
var index = require("./routes/index");
var  doctor = require("./routes/doctor");

// Création d'un objet de type "express"
var app = express();

// Configuration de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Adresse de la base de données
var urlmongo = "mongodb://test-user:test-password@ds133044.mlab.com:33044/disruptors"; 

// Options pour la connexion à la base de données
var options = {
  useMongoClient: true,
  autoIndex: true, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

// Connexion à la base de données
mongoose.Promise = global.Promise;
mongoose.connect(urlmongo, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connexion à la base de données réussie")
});

//use sessions for tracking logins
app.use(session({
  cookieName: 'doctor',
  secret: 'something',
  resave: true,
  saveUninitialized: false
}));

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Import du modèle medecin
var Doctor = require("./models/DoctorModel");


// Configuration du routage
app.use("/", index);
app.use("/doctor", doctor);

// Tout autre chemin (erreur 404) est redirigé vers le gestionnaire d'erreurs
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Gestionnaire d'erreurs
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json(err.message);

});

module.exports = app;