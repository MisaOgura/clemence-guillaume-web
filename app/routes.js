module.exports = function(app) {
  var path = trequire("path");

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  app.get('/portfolio', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'portfolio.html'));
  });
};
