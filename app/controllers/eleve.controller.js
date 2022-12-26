const db = require("../models");
const Eleve = db.eleve;

// Récupérer tous les assignments (GET)
exports.getEleves = (req, res) => {
    Eleve.find((err, eleves) => {
        res.json(eleves);
    }
    )

}

// Récupérer un eleve par son id (GET)
exports.getEleve = (req, res, next) => {
    let assignmentId = req.params.id;

    console.log("assignmentId", assignmentId)

    Eleve.findOne({ _id: assignmentId }, (err, eleve) => {
        if (err) { res.status(500).send(err); return }
        if (!eleve) { res.status(404).send('Eleve not found'); return }
        res.json(eleve);
    }).populate('eleve').populate('eleve');

}

