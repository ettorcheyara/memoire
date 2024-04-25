const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    niveauAcces: { type: Number, default: 1 },
    dateCreationCompte: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Admin', adminSchema);

