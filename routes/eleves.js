let Eleve = require('../model/index').eleve;

// Récupérer tous les assignments (GET)
function getEleves(req, res) {
    Eleve.find((err, eleves) => {
        res.json(eleves);
    }
    )

}

// Récupérer un eleve par son id (GET)
function getEleve(req, res, next) {
    let assignmentId = req.params.id;

    console.log("assignmentId", assignmentId)

    Eleve.findOne({ _id: assignmentId }, (err, eleve) => {
        if (err) { res.status(500).send(err); return }
        if (!eleve) { res.status(404).send('Eleve not found'); return }
        res.json(eleve);
    }).populate('eleve').populate('eleve');



}



module.exports = { getEleves, getEleve };
