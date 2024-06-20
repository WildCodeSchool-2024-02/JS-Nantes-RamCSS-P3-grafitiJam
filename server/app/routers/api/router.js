const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */



const artRouter = require("./art/router");

router.use("/art", artRouter);

const userRouter = require("./user/router");

router.use("/user", userRouter);

/* ************************************************************************* */

module.exports = router;
