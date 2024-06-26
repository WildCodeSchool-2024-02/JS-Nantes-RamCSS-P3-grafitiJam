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
  readByUserId,
} = require("../../../controllers/userActions");

// Route to get a list of items
router.get("/", browse);
router.get("/badge/:user_id", readByUserId);
// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
