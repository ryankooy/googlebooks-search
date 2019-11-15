const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const controller = require('../../controllers/controller');

router.use('/api/books', apiRoutes);

router
  .route('/api/search')
  .get(controller.getBooks);

module.exports = router;
