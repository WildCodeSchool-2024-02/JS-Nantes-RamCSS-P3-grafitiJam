const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  add,
  readByHoodId,
  readByUserId,
  readByArtist,
} = require("../../../controllers/artActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);
router.get("/hood/:hood_id", readByHoodId);
router.get("/user/:user_id", readByUserId);
router.get("/artist/:artist", readByArtist);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
