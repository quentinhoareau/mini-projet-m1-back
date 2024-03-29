const db = require("../models");
const Matiere = db.matiere;

// Récupérer tous les assignments (GET)
exports.getMatieres = (req, res) => {
    Matiere.find((err, matieres) => {
        res.json(matieres);
    }
    )
}

// Récupérer un matiere par son id (GET)
exports.getMatiere = (req, res, next) => {
    let assignmentId = req.params.id;

    console.log("assignmentId", assignmentId)

    Matiere.findOne({ _id: assignmentId }, (err, matiere) => {
        if (err) { res.status(500).send(err); return }
        if (!matiere) { res.status(404).send('Matiere not found'); return }
        res.json(matiere);
    }).populate('matiere').populate('eleve');

}

