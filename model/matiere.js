let mongoose = require("mongoose");


const EleveSchema = new mongoose.Schema({
   id: Number,
   nom: String,
   enseignant: String
})

module.exports = mongoose.model("Matiere", EleveSchema);