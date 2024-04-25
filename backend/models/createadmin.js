
const mongoose = require('mongoose');
const Admin = require('C:/Users/ettor/memoirnode/models/admin');


mongoose.connect('mongodb://localhost:27017/memoirnode', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB.'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

const nouvelAdmin = new Admin({
    nom: "Nom Admin",
    email: "admin@example.com",
    motDePasse: "motDePasseSecurise",
    niveauAcces: 1,
});

nouvelAdmin.save()
    .then(doc => {
        console.log('Admin créé avec succès:', doc);
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Erreur lors de la création de l\'admin:', err);
        mongoose.disconnect();
    });
