const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const panierSchema = new Schema({
    client: { type: Schema.Types.ObjectId, ref: 'Client' },
    articles: [{
        produit: { type: Schema.Types.ObjectId, ref: 'Produit' },
        quantite: Number
    }],
    total: Number,
    dateMiseAJour: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Panier', panierSchema);
