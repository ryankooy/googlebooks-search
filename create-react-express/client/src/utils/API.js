import axios from 'axios';

export default {
  getBooks: function(query) {
    return axios.get("/api/search", { params: { q: query } });
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
