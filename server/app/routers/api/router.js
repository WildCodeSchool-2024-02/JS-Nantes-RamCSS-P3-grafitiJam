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

router.use("/style", styleRouter);


const uploadRouter = require("./uploadsPhotos/router");

router.use("/upload", uploadRouter);




/* ************************************************************************* */

module.exports = router;
