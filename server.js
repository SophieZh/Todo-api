var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'register GYM',
	completed: true
}];


app.get('/', function (req, res) {
	res.send('Todo API Root');
});

// Get /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

// Get /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoId = req.params.id;

	// iterate of todos array. Find the match
	for (var i = 0; i < todos.length; i++) {
		if (todos[i].id == todoId) {
			res.json(todos[i]);
			return;
		}
	}
	res.status(404).send('Do not find matching');
	
});



app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');

});