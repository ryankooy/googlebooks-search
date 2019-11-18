const mongoose = require('mongoose');
const db = require('../models');
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const axios = require('axios');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'
);

module.exports = {
  getBooks: function(req, res) {
    axios.get(BASE_URL, { params: { q: req } })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  findBooks: function(req, res) {
    db.Book
      .find({})
      .then(books => { res.json(books) })
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
  }
};
