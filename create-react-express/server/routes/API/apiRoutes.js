const router = require('express').Router();
const controller = require('../../controllers/controller')(db);

router
  .route('/')
  .get(controller.getBooks)
  .post(controller.saveBooks);

router
  .route('/:id')
  .delete(controller.deleteBook);

router
  .route('*')
  .get(controller.loadPage);

module.exports = router;
