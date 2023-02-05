const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// http://localhost:8090
router.route("/")
    .get((req, res) => {
        // récupère tous les objets
        Task.find()
            .then((data) => {
                res.render('home', {task: data});
                console.log(data);
            } )
    });

// http://localhost:8090
router.route('/task/new')
    .get((req, res)=> {
        res.render('new-task-form', { errors : ''})
    })
    .post((req, res) => {
        let errors = "";

        if(req.body.Label == ""){
            errors += "Le champs label n'est pas renseigné"
        }

        if(req.body.Description == ""){
            errors += "Le champs description n'est pas renseigné"
        }

        if(req.body.DateTask == ""){
            errors += "Le champs date n'est pas renseigné"
        }

        if(errors != "") {
            res.render('new-task-form', {
                errors: errors
            })
        }
        else {
            let task = new Task(req.body);
            task.save()
            .then((data) =>  res.redirect(('/')))
        }
    })

// route : localhost:port/api/
router.route("/task/delete/:id")
    .get((req,res) => {
        Task.deleteOne({_id: req.params.id})
            .then((data) => res.redirect(('/')))
    })

module.exports = router;
