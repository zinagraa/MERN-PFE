import express from "express";
import authController from "../controllers/authController.js";  // Ajout de l'extension .js

const router = express.Router();

router.post("/register", authController.register); // hedhi route mte3k ll s'inscrire rit /registre heki indepoint mte3k rak bch tsthakha f postman w f front m3a ili mawjouda  f server /api/auth/registre 
router.post("/login", authController.login);  // hedhi route mte3k l login 

export default router;
