
const mongoose = require('mongoose');
const Produit = require('C:/Users/ettor/memoirnode/models/produit');


mongoose.connect('mongodb://localhost:27017/memoirnode', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB.'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Simulez l'ID d'un vendeur existant
const idVendeur = '6614d062b65953bf80c715f6';

// Créez un nouveau produit
const nouveauProduit = new Produit({
    nom: "Nom du Produit",
    description: "Description du produit ici.",
    prix: 199.99,
    categorie: "Catégorie du Produit",
    stock: 10,
    vendeur: idVendeur, // Assurez-vous que cet ID correspond à un vendeur existant dans votre DB
    images: ["url_de_l_image_1", "url_de_l_image_2"], // Remplacez par les URLs réelles des images
});

nouveauProduit.save()
    .then(doc => {
        console.log('Produit créé avec succès:', doc);
        mongoose.disconnect(); // Optionnel: Déconnectez-vous après l'opération
    })
    .catch(err => {
        console.error('Erreur lors de la création du produit:', err);
        mongoose.disconnect(); // Optionnel: Déconnectez-vous même en cas d'erreur
    });

