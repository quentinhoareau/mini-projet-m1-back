let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");


let AssignmentSchema = mongoose.Schema({
   dateDeRendu: Date,
   nom: String,
   rendu: Boolean,
   matiere: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Matiere'
   },
   eleve: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Eleve'
   },
   note: Number,
   remarque: String
}

);


AssignmentSchema.plugin(aggregatePaginate);
module.exports = mongoose.model("Assignment", AssignmentSchema);