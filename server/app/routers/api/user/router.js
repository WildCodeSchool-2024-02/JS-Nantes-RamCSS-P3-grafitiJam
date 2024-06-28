const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  readByUserId,
} = require("../../../controllers/userActions");

const userActions = require("../../../controllers/userActions");
const { hashPassword, verifyToken } = require("../../../services/auth");


router.get("/", browse);
router.get("/badge/:user_id", readByUserId);
// Route to get a specific item by ID
router.get("/:id", read);

router.post("/", hashPassword, userActions.add);


// Authentication wall
router.use(verifyToken);



module.exports = router;
