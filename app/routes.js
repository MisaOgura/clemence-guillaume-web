module.exports = function(app) {
  var path = require("path");

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/portfolio', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

};
