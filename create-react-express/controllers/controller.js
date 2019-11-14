const db = require('../models');
const path = require('path');

module.exports = {
  getBooks: function(req, res) {
    db.Book
      .find(req.query)
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  },
  saveBooks: function(req, res) {
    db.Book
      .create(req.body)
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  },
  deleteBook: function(req, res) {
    db.Book
      .delete({ _id: req.params.id })
      .then(book => res.json(book))
      .catch(err => res.status(422).json(err));
  },
  loadPage: function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  }
};
