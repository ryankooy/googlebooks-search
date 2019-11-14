const db = require('../models');
const path = require('path');
const axios = require('axios');
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = '&key=AIzaSyDVVX3tdMWGnNqZvaCrT2radkym14pRaFI';

module.exports = {
  getBooks: function(query) {
    axios.get(`BASE_URL${query}API_KEY`);
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
