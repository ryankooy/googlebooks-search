import axios from 'axios';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export default {
  getBooks: function(query) {
    return axios.get(BASE_URL, { params: { q: query } });
  },
  findBooks: function() {
    return axios.get('/api/books');
  },
  saveBooks: function(data) {
    return axios.post('/api/books', data);
  },
  deleteBook: function(id) {
    return axios.delete(`/api/books/${id}`);
  }
};
