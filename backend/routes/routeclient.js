const cors = require('cors');
const express = require('express');
const router = express.Router();
const Client = require('../models/client');
app.use(express.json());
app.use('/api', clientRoutes)
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

const { body, validationResult } = require('express-validator');

router.post(
  '/routeclient',
  [
    body('nom').notEmpty().withMessage('Le nom est requis.'),
    body('email').isEmail().withMessage("L'email n'est pas valide."),
    body('motDePasse').isLength({ min: 6 }).withMessage("Le mot de passe doit avoir au moins 6 caractères."),
  ],
  (req, res) => {
    const erreurs = validationResult(req);
    if (!erreurs.isEmpty()) {
      return res.status(400).send({ message: 'Données invalides', errors: erreurs.array() });
    }

    const nouveauClient = new Client({
      nom: req.body.nom,
      email: req.body.email,
      motDePasse: req.body.motDePasse,
      adresseLivraison: req.body.adresseLivraison || "", // Champ optionnel
      panier: { articles: [] },
      historiqueCommandes: []
    });

    nouveauClient.save((err) => {
      if (err) {
        res.status(500).send({ message: 'Erreur lors de la création du client', error: err });
      } else {
        res.status(201).send({ message: 'Client créé avec succès', client: nouveauClient });
      }
    });
  }
);


// Route DELETE pour supprimer un client par son ID
router.delete('/clients/:id', (req, res) => {
  Client.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la suppression du client', error: err });
    } else {
      if (result) {
        res.status(200).send({ message: 'Client supprimé avec succès' });
      } else {
        res.status(404).send({ message: 'Client non trouvé' });
      }
    }
  });
});
// Route PUT pour mettre à jour les informations d'un client par son ID
router.put('/clients/:id', (req, res) => {
  const miseAJour = {
    nom: req.body.nom,
    email: req.body.email,
    motDePasse: req.body.motDePasse,
    adresseLivraison: req.body.adresseLivraison
  };

  Client.findByIdAndUpdate(
    req.params.id,
    { $set: miseAJour },
    { new: true }, // Pour renvoyer le document mis à jour
    (err, updatedClient) => {
      if (err) {
        res.status(500).send({ message: 'Erreur lors de la mise à jour du client', error: err });
      } else {
        if (updatedClient) {
          res.status(200).send({ message: 'Client mis à jour avec succès', client: updatedClient });
        } else {
          res.status(404).send({ message: 'Client non trouvé' });
        }
      }
    }
  );
});
router.put('/clients/:id/panier', (req, res) => {
  const { article } = req.body; // Un objet représentant le produit à ajouter
  const clientId = req.params.id;

  Client.findByIdAndUpdate(
    clientId,
    { $push: { 'panier.articles': article } }, // Ajout de l'article au panier
    { new: true }, // Retourner le document mis à jour
    (err, updatedClient) => {
      if (err) {
        res.status(500).send({ message: 'Erreur lors de l\'ajout au panier', error: err });
      } else {
        if (updatedClient) {
          res.status(200).send({ message: 'Article ajouté au panier', client: updatedClient });
        } else {
          res.status(404).send({ message: 'Client non trouvé' });
        }
      }
    }
  );
});


module.exports = router;