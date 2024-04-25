// Importez mongoose et le modèle Panier
const mongoose = require('mongoose');
const Panier = require('C:/Users/ettor/memoirnode/models/panier'); // Assurez-vous que le chemin est correct

// Remplacez ceci par votre propre chaîne de connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/memoirnode', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB.'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Simulez l'ID d'un client et d'un produit existants
const idClient = '6614ca23b1471638efa87b66';
const idProduit = '6614d0e2e51ce93c4ba90f7d';

// Créez un nouveau panier
const nouveauPanier = new Panier({
    client: idClient,
    articles: [{
        produit: idProduit,
        quantite: 2, // Quantité du produit dans le panier
    }],
    total: 200, // Le total devrait idéalement être calculé automatiquement à partir des prix des produits
    // dateMiseAJour est définie par défaut à Date.now()
});

nouveauPanier.save()
    .then(doc => {
        console.log('Panier créé avec succès:', doc);
        mongoose.disconnect(); // Optionnel: Déconnectez-vous après l'opération
    })
    .catch(err => {
        console.error('Erreur lors de la création du panier:', err);
        mongoose.disconnect(); // Optionnel: Déconnectez-vous même en cas d'erreur
    });
