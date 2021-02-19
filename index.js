var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/:id', function(request, response) {
  response.send('Hello World!')
})

app.get('/multiply/', function(request, response) {
  response.send(req.query.num1* req.query.num3);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})