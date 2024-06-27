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

const userActions = require("../../../controllers/userActions");
const { hashPassword, verifyToken } = require("../../../services/auth");






// Route to get a list of items
router.get("/", browse);
router.get("/badge/:user_id", readByUserId);
// Route to get a specific item by ID
router.get("/:id", read);
router.post("/", hashPassword, userActions.add);


// Route to add a new item
router.post("/", add);



// Authentication wall
router.use(verifyToken);
/* ************************************************************************* */

module.exports = router;
