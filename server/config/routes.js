module.exports = function(app) {
  	var users = require('../controllers/users.js');
  	var appts = require('../controllers/appointments.js');
	app

	.get('/appointments', function(request, response) {
		console.log('.get for /appointments, routing');
		appts.index(request, response);
	})
	.post('/appointments', function(request, response) {
		console.log('.post for /appointments, routing');
		appts.create(request, response);
	})
	.delete('/appointments/:id', function(request, response) { 
		console.log('.delete for id:', request.params.id);
		appts.destroy(request, response);
	})
	// - - - User - - -
    // Index
	.get('/users', function(request, response) { 
		console.log('.get for /users, routing...');
		users.index(request, response) 
	})
	// New
	.get('/users/new', function(request, response) { 
		console.log('.get for new user, routing...');
		users.create(request, response) 
	})
	// Show
	.get('/users/:id', function(request, response) { 
		console.log('.get for id: ', request.params.id);
		users.show(request, response);
	})
	// Edit 
	.post('/users/:id/edit', function(request, response) { 
		console.log('.post for user/:id/edit', request.params.id);
		users.update(request, response);
		})
	// Create
	.post('/users', function(request, response) { 
		console.log('.post for /users', request.body);
		users.create(request, response);
	})	
	// Destroy
	.delete('/users/:id', function(request, response) { 
		console.log('.delete for id:', request.params.id);
		users.destroy(request, response);
	})
	// Update
	.put('/users/:id', function(request, response) { 
		console.log('.put for id:', request.params.id);
		users.update(request, response);
	})
};