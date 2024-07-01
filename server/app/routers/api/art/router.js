const express = require("express");

const router = express.Router();

// Import item-related actions
const {
  browse,
  read,
  post,
  readByHoodId,
  readByUserId,
  readByArtist,
  readByStyle,
} = require("../../../controllers/artActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);
router.get("/hood/:hood_id", readByHoodId);
router.get("/user/:user_id", readByUserId);
router.get("/artist/:artist", readByArtist);
router.get("/style/:style", readByStyle);

// Route to add a new item
router.post("/", post);

module.exports = router;
