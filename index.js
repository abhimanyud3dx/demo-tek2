var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/multiply/:num1/:num2', function(request, response) {
	console.log(JSON.stringify(request.params));
	if(request.params.num1 && request.params.num2) {
		response.send(request.params.num1* request.params.num2);
	} else {
		response.send('Please enter correct request.');
	}
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
