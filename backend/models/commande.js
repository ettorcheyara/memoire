const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commandeSchema = new Schema({
    client: { type: Schema.Types.ObjectId, ref: 'client' }, // Référence au modèle Client
    articles: [{
        produit: { type: Schema.Types.ObjectId, ref: 'Produit' },
        quantite: Number,
        prix: Number
    }],
    total: Number,
    adresseLivraison: {
        rue: String,
        ville: String,
        codePostal: String,
        pays: String
    },
    status: { type: String, default: 'en attente' }, // Ex: 'en attente', 'expédiée', 'livrée', 'annulée'
    dateCommande: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Commande', commandeSchema);
