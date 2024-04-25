const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema({
    nom: { type: String, required: true },
    description: String,
    prix: { type: Number, required: true },
    categorie: String,
    stock: Number,
    vendeur: { type: Schema.Types.ObjectId, ref: 'Vendeur' }, // Référence au modèle Vendeur
    images: [String], // URLs d'images
    dateAjout: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Produit', produitSchema);
