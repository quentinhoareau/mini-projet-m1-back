let mongoose = require("mongoose");


const EleveSchema = new mongoose.Schema({
   id: Number,
   nom: String,
   prenom: String
})

module.exports = mongoose.model("Eleve", EleveSchema);