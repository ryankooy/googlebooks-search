import axios from 'axios';

export default {
  getBooks: function() {
    return axios.get('/api/books');
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
