const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/books', apiRoutes);

module.exports = router;
