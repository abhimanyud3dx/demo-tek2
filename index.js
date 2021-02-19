var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/math/:operation', function(request, response) {
	if(request.params.operation == 'multiply') {
		response.send(request.query.num1* request.query.num2);
	} else {
		response.send('Please enter correct request.');
	}
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
