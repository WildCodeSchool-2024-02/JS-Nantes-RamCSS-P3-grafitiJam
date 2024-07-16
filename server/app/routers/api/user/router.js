const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  readByUserId,
  add,
} = require("../../../controllers/userActions");

const { hashPassword, verifyToken, login } = require("../../../services/auth");

router.get("/", browse);

router.get("/badge/:user_id", readByUserId);

router.get("/:id", read);

router.post("/", hashPassword, add);

router.post("/login", login);

router.post("/validateToken", verifyToken);

router.use(verifyToken);

module.exports = router;
