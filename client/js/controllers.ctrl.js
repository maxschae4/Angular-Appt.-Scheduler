app.controller('MainController', function(){
	console.log("MainController Loaded");
	
})

app.controller('AppointmentsController', function(AppointmentFactory, UserFactory, $location, $rootScope) {
	console.log('appointment controller loaded', $rootScope.user);
	// $rootScope.times = ['08','09','10','11','12','01','02','03','04','05'];
	this.user = $rootScope.user;
	// console.log(this.user);
	var that = this;
	this.today = new Date();
	this.today.setDate(this.today.getDate() + 1);
	console.log(this.today);
	// this.times = $rootScope.times;
	this.available = [];

	var getAppts = function() {
		console.log('getting appts');
		AppointmentFactory.getAppts(function(appts) {
			console.log('got appts from factory', appts);
			that.appts = appts;
		})
	}
	getAppts();

	this.new_appointment = function(newAppt) {
		newAppt.name = $rootScope.user;
		console.log('in new appt, adding', newAppt);
		AppointmentFactory.addAppt(newAppt, function() {
			console.log('added new appt');
		})
	}

	this.showDelete = function(name){
		if(name === $rootScope.user) {
			console.log(name, $rootScope.user);
			return true;
		}
		console.log(false, $rootScope.user);
		return false;
	}

	this.deleteAppt = function(appt){
		console.log('removing appt', appt);
		AppointmentFactory.remove(appt, function(){
			console.log('removed appt, updating list');
			getAppts();
		})
	}

	this.getTime = function(date) {
		if(date) {
			var available = ['08','09','10','11','12','01','02','03','04','05'];
			// console.log(date, that.available, that.times);
			var day = [];
			for(appointment in that.appts) {
				if (date === that.appts[appointment].date) {
					day.push(that.appts[appointment].time);
				}
			}
			var limit = '';
			for(appointment in that.appts) {
				if (date === that.appts[appointment].date) { 
					// console.log(that.appts[appointment].name, $rootScope.user);
					if($rootScope.user === that.appts[appointment].name) {
						limit = 'reached';
					}
				}
			}
			// console.log(day);
			
			for (time in day) {
				for (atime in available) {
					if (day[time] === available[atime]) {
						available.splice(atime,1);
					}
				}
			}
			// console.log(that.today.getDate()+1);
			that.available = (limit != 'reached' && day.length < 3 ) ? available : [];
			// console.log(that.available, that.times, $rootScope.times);
		}
	}
})

app.controller('UsersController', function(UserFactory, $rootScope){
	console.log("UsersController Loaded");
	var that = this;
	this.user;

	var getUsers = function(){
		console.log('getting users');
		UserFactory.getUsers(function(users){
			console.log('got users from the factory');
			that.users = users;
		});
	}
	getUsers();
	this.add = function(newUser){
		$rootScope.user = newUser.name;
		console.log('sending user to the factory', newUser);
		UserFactory.add(newUser, function(){
			console.log('added user, updating list');
			getUsers();
		})
	}
	this.remove = function(user){
		console.log('removing user', user);
		UserFactory.remove(user, function(){
			console.log('removed user, updating list');
			getUsers();
		})
	}
	this.show = function(user){
		console.log('showing user', user);
		UserFactory.setUser(user);
	}
})

