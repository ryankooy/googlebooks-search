const router = require('express').Router();

module.exports = db => {
  const controller = require('../../controllers/controller')(db);

  router.get('/api/books', controller.getBooks);
  router.post('/api/books', controller.saveBooks);
  router.delete('/api/books/:id', controller.deleteBook);
  router.get('*', controller.loadPage);

  return router;
};
