
const mongoose = require('mongoose');
const Vendeur = require('C:/Users/ettor/memoirnode/models/vendeur');


mongoose.connect('mongodb://localhost:27017/memoirnode', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB.'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));


const nouveauVendeur = new Vendeur({
    nomSociete: "Nom de la Société",
    email: "email@societe.com",
    motDePasse: "motDePasseSecurise",
    adresse: {
        rue: "123 Rue de l'Exemple",
        ville: "Ville Exemple",
        codePostal: "12345",
        pays: "Pays Exemple"
    },
    description: "Une description de la société ou du vendeur.",
    numeroTVA: "FR123456789",
});

nouveauVendeur.save()
    .then(doc => {
        console.log('Vendeur créé avec succès:', doc);
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Erreur lors de la création du vendeur:', err);
        mongoose.disconnect();
    });
