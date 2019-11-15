const router = require('express').Router();
const controller = require('../../controllers/controller');

// to display and save books
router
  .route('/')
  .get(controller.getBooks)
  .get(controller.findBooks)
  .post(controller.saveBooks);

// to delete a specific book
router
  .route('/:id')
  .delete(controller.deleteBook);

module.exports = router;
