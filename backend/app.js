

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/memoirnode', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Connecté à MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error(`Erreur de connexion à MongoDB: ${err.message}`);
});
