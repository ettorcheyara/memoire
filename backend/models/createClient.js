const mongoose = require('mongoose');
const Client = require('C:/Users/ettor/memoirnode/models/client'); // Assurez-vous que le chemin d'accès est correct

mongoose.connect('mongodb://localhost:27017/memoirnode', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB.'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

const nouveauClient = new Client({
    nom: "John Doe",
    email: "johndoe@example.com",
    motDePasse: "s3cr3t",
    adresseLivraison: [{
        rue: "123 Rue Principale",
        ville: "Ville",
        codePostal: "12345",
        pays: "Pays"
    }],
    panier: {
        articles: []
    },
    historiqueCommandes: []
});

nouveauClient.save()
    .then(doc => {
        console.log('Client créé avec succès:', doc);
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Erreur lors de la création du client:', err);
        mongoose.disconnect();
    });
