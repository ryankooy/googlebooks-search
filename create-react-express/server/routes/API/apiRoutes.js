const router = require('express').Router();
const controller = require('../../controllers/controller');

router
  .route('/')
  .get(controller.getBooks)
  .post(controller.saveBooks);

router
  .route('/:id')
  .delete(controller.deleteBook);

module.exports = router;
