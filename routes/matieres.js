let Matiere = require('../model/index').matiere;

// Récupérer tous les assignments (GET)
function getMatieres(req, res) {
    Matiere.find((err, matieres) => {
        res.json(matieres);
    }
    )

}

// Récupérer un matiere par son id (GET)
function getMatiere(req, res, next) {
    let assignmentId = req.params.id;

    console.log("assignmentId", assignmentId)

    Matiere.findOne({ _id: assignmentId }, (err, matiere) => {
        if (err) { res.status(500).send(err); return }
        if (!matiere) { res.status(404).send('Matiere not found'); return }
        res.json(matiere);
    }).populate('matiere').populate('eleve');



}



module.exports = { getMatieres, getMatiere };
