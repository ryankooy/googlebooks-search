import axios from 'axios';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = '&key=AIzaSyDVVX3tdMWGnNqZvaCrT2radkym14pRaFI';

export default {
  getBooks: function(query) {
    return axios.get(`BASE_URL${query}API_KEY`);
  },
  saveBooks: function() {
    return axios.post('/api/books');
  },
  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  },
  loadPage: function() {
    return axios.get('*');
  }
};
