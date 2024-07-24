const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  updateProfilePicture,
  readByUserId,
  add,
  validateToken,
} = require("../../../controllers/userActions");

const { hashPassword, verifyToken, login } = require("../../../services/auth");

router.get("/", browse);

router.get("/badge/:user_id", readByUserId);

router.get("/:id", read);

router.post("/", hashPassword, add);

router.post("/login", login);
router.post("/validateToken", verifyToken, validateToken);
router.patch("/update", updateProfilePicture);

router.use(verifyToken);

module.exports = router;
