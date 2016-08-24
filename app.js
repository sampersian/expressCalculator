var Express = require('express');
var app = Express();
var port = 5000;

app.use(Express.static('public'));

// When a user visits /add/9/3, it should display 12

app.get('/add/:any1/:any2', function(req, res) {
  let sum = Number(req.params.any1)+Number(req.params.any2);
  res.send(String(sum));
})

// When a user visits /sub/9/3, it should display 6

app.get('/sub/:any1/:any2', function(req, res) {
  let diff = Number(req.params.any1)-Number(req.params.any2);
  res.send(String(diff));
})


// When a user visits /mult/9/3, it should display 27

app.get('/mult/:any1/:any2', function(req, res) {
  let prod = Number(req.params.any1)*Number(req.params.any2);
  res.send(String(prod));
})

// When a user visits /div/9/3, it should display 3

app.get('/div/:any1/:any2', function(req, res) {
  let div = Number(req.params.any1)/Number(req.params.any2);
  res.send(String(div));
})

app.listen(port);
