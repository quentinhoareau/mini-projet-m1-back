const db = require("../models");
const Assignment = db.assignment;

// Récupérer tous les assignments (GET)
exports.getAssignments = (req, res) => {
    var aggregateQuery = Assignment.aggregate()

    Assignment.aggregatePaginate(aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10,
        },
        (err, assignments) => {
            if (err) {
                res.send(err);
            }
            res.send(assignments);
        }
    );

}

// Récupérer un assignment par son id (GET)
exports.getAssignment = (req, res, next) => {
    let assignmentId = req.params.id;

    console.log("assignmentId", assignmentId)

    Assignment.findOne({ _id: assignmentId }, (err, assignment) => {
        if (err) { res.status(500).send(err); return }
        if (!assignment) { res.status(404).send('Assignment not found'); return }
        res.json(assignment);
    }).populate('matiere').populate('eleve');



}

// Ajout d'un assignment (POST)
exports.postAssignment = (req, res) => {
    let assignment = new Assignment();
    assignment.nom = req.body.nom;
    assignment.remarque = req.body.remarque;
    assignment.note = req.body.note;
    assignment.dateDeRendu = req.body.dateDeRendu;
    assignment.rendu = req.body.rendu;
    assignment.matiere = req.body.matiere._id;
    assignment.eleve = req.body.eleve._id;

    console.log("POST assignment reçu :");
    console.log(assignment)

      assignment.save((err) => {
          if (err) {
              res.send('cant post assignment ', err);
          }
          res.json({ message: `${assignment.nom} saved!` })
      })

   
}

// Update d'un assignment (PUT)
exports.updateAssignment = (req, res) => {
    console.log("UPDATE recu assignment : ");
    console.log(req.body);
    Assignment.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, assignment) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json({ message: 'updated' })
        }

    });

}

// suppression d'un assignment (DELETE)
exports.deleteAssignment = (req, res) => {

    Assignment.findByIdAndDelete(req.params.id, (err, assignment) => {
        if (err) {
            res.send(err);
        }
        res.status(200).send(assignment);
    })
}

