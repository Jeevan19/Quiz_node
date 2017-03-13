var express = require('express');
var bodyParser = require('body-parser');
var application_root = __dirname,
  app = express();

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(application_root));
app.get('/', function (req, res){
	res.render('quiz',{});
});
app.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.body.q1 + '"."' + req.body.q2 + '"."' + req.body.q3 + '"."' + req.body.q4 + '".');
});

app.listen(8000, function() {
  console.log('Server running at http://127.0.0.1:8000/');
});

