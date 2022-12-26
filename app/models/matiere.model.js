let mongoose = require("mongoose");


let  MatiereSchema = new mongoose.Schema({
   id: Number,
   nom: String,
   enseignant: String
})

module.exports = mongoose.model("Matiere", MatiereSchema);