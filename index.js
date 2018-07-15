var express = require('express');

var app = express();


var data = [{
	name: "Arjun Ghimire",
	address: "Butwal Rupandehi"
}]

app.get('/',(req,res) => res.send(data))

app.listen(3000);