import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';  // Importer le fichier de routes

dotenv.config();

const app = express();

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté'))
  .catch((err) => console.log(err));

// Utilisation des routes d'authentification
app.use("/api/auth", authRoutes); // Définir le chemin pour les routes d'authentification

// Démarrage du serveur
app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré sur le port ${process.env.PORT}`);
});

