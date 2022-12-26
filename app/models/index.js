const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.assignment = require("./assignment.model");
db.matiere = require("./matiere.model");
db.eleve = require("./eleve.model");

module.exports = db;