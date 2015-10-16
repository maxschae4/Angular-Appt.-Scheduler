app.factory('AppointmentFactory', function($http, $location){
	return {
		getAppts: function(callback) {
			console.log('appt factory getAppts');
			$http.get('/appointments').success(function(response) {
				callback(response);
			})
		},
		addAppt: function(newAppt) {
			console.log('adding new appt', newAppt);
			$http.post('/appointments', newAppt).success(function(response) {
				$location.path('/appointments');
			})
		}, 
		remove: function(appt, callback) {
			console.log('removing appt', appt);
			$http.delete('/appointments/'+appt._id).success(function(response) {
				callback();
			})
			// remember to add the comma to this bracket;
		}
		// getTime: function(date) {
		// 	console.log('getting date');
		// 	$http.post('/appointment/date', date).success(function(response){

		// 	});
		// }
	}
		
})

app.factory('UserFactory', function($http, $location){
	var activeUser;
	var userFactory = {
		getUsers: function(callback){
			console.log("UsersFactory getUsers");
			$http.get('/users').success(function(response){
				callback(response);
			})
		},
		add: function(newUser){
			if(newUser){
				console.log("UsersFactory add ", newUser);
				activeUser = newUser.name;
				console.log(activeUser, newUser);
				$http.post('/users', newUser).success(function(response){
					$location.path('/appointments');
				})
			}
		},
		remove: function(user, callback){
			console.log("UsersFactory remove ", user);
			$http.delete('/users/'+user._id).success(function(response){
				callback();
			})
		},
		update: function(user){
			console.log("UsersFactory remove ", user);
			$http.put('/users/'+user._id, user).success(function(response){
				$location.path('/users');
			})
		},
		setUser: function(user){
			this.user = user;
			$location.path('/users/details');
		},
		getUser: function(){
			if(!this.user)
				$location.path('/users');
			return this.user;
		}
	}
	return userFactory;
})