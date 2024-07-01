// Dans le fichier `server/app/routers/api/user/router.js`

const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  readByUserId,
} = require("../../../controllers/userActions");

const userActions = require("../../../controllers/userActions");
const { hashPassword, verifyToken, login } = require("../../../services/auth");

router.get("/", browse);
router.get("/badge/:user_id", readByUserId);
router.get("/:id", read);

router.post("/", hashPassword, userActions.add);

// Définir la route de connexion ici
router.post("/login", login);

// Mur d'authentification
router.use(verifyToken);

module.exports = router;
