const path = require('path');
const router = require('express').Router();
const routes = require('./api');

router.use('/api', routes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
