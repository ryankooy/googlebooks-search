const db = require('../models');
const path = require('path');
const axios = require('axios');

module.exports = () => {
  return {
    getBooks: function(req, res) {
      db.Book.find({})
        .then(books => res.json(books))
        .catch(err => console.log(err));
    },
    saveBooks: function(req, res) {
      db.Book.find({})
        .then(books => res.json(books))
        .catch(err => console.log(err));
    },
    deleteBook: function(req, res) {
      db.Book.find({})
        .then(books => res.json(books))
        .catch(err => console.log(err));
    },
    loadPage: function(req, res) {
      res.sendFile(path.join(__dirname, './client/build/index.html'));
    }
  }
};
