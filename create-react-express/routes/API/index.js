const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

router.use("/api/books", apiRoutes);

module.exports = router;
