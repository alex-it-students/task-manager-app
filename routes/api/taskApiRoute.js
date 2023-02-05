const express = require('express');
const router = express.Router();
const Task = require('../../models/task');

// route : localhost:port/api/tasks
router.route("/tasks")
    .get((req, res) => {
        // récupère tous les objets
        Task.find()
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).json(error))
    });

// route : localhost:port/api/
router.route("/task/:id")
    .get((req,res) => {
        Task.findOne({_id: req.params.id})
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(400).json(error))
    })
    .put((req,res) => {
        Task.updateOne({_id: req.params.id}, req.body)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(400).json(error))
    })
    .delete((req,res) => {
        Task.deleteOne({_id: req.params.id})
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(400).json(error))
    })

// export des routes contenues dans le routeur
module.exports = router;