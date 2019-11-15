const path = require('path');
const router = require('express').Router();
const routes = require('./API');

router.use('/API', routes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
