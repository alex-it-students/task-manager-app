const mongoose = require('mongoose');

// creation d'un schema qui génère un objet
const taskSchema = mongoose.Schema({
Label: { type: String, required: true },
Description: { type: String, required: true },
DateTask: { type: Date, required: true},
Status: { type: String, required: false }
});

// exportation du modèle qu'on appelle 'Task'
module.exports = mongoose.model('Task', taskSchema);