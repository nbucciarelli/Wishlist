var express = require('express');
var app = express();
var pkg = require(__dirname + '/package.json');
var nano = require('nano')("http://localhost:5984");
nano.db.create('wishlist');
var db = nano.use("wishlist");
var _ = require('underscore');
// var server = require('http').createServer(app);

app.configure( function() {
  app.engine('.html', require('ejs').__express);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  
  app.use(express.json());
});

app.get('/', function(req, res){
  res.send({ name: pkg.name, version: pkg.version });
});

app.get('/wishes', function(req, res){
  db.list({ include_docs: true }, function(err, data){
    if (err) { return res.send(500, err); }
    res.send(_(data.rows).pluck('doc'));
  });
});

app.post('/wish', function(req, res){
  db.insert(req.body).pipe(res);
});

app.get('/views/*', function(req, res) {
  var view = req.url.replace('/views/','');
  res.render(view);
});

module.exports = app;
// // middleware here
// exports.use = function() {
//   app.use.apply(app, arguments);
// };
