const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */



const artRouter = require("./art/router");

router.use("/art", artRouter);



const userRouter = require("./user/router");

router.use("/user", userRouter);


const styleRouter = require("./style/router");

// Use style router
router.use("/style", styleRouter);


/* ************************************************************************* */

module.exports = router;
