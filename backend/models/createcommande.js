
const mongoose = require('mongoose');
const Commande = require('C:/Users/ettor/memoirnode/models/commande');


mongoose.connect('mongodb://localhost:27017/memoirnode', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB.'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));


const idClient = '6614ca23b1471638efa87b66';
const idProduit = '6614d0e2e51ce93c4ba90f7d';

// Créez une nouvelle commande
const nouvelleCommande = new Commande({
    client: idClient,
    articles: [{
        produit: idProduit,
        quantite: 1,
        prix: 100, // Ce prix devrait idéalement être récupéré à partir des détails du produit
    }],
    total: 100,
    adresseLivraison: {
        rue: "123 Rue de l'Exemple",
        ville: "Ville Exemple",
        codePostal: "12345",
        pays: "Pays Exemple"
    },
    status: 'en attente', // Utilisez la valeur par défaut ou spécifiez-en une autre
});

nouvelleCommande.save()
    .then(doc => {
        console.log('Commande créée avec succès:', doc);
        mongoose.disconnect(); // Optionnel: Déconnectez-vous après l'opération
    })
    .catch(err => {
        console.error('Erreur lors de la création de la commande:', err);
        mongoose.disconnect(); // Optionnel: Déconnectez-vous même en cas d'erreur
    });
