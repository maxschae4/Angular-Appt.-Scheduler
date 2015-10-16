var Appointment = mongoose.model('Appointment');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Appointments - Index")
			// var appt = [{first_name:'Winners!!!!'}];
			Appointment.find({}, function(err, appt){
				if(err){
					console.log(err);
					response.json([{appt:"Updating, please be patient..."}]);
				}
				else{
					console.log(appt);
					response.json(appt);
				}
			})
		},
		new: function(request, response){
			console.log("Server / Ctrl / Appointments - New")
		},
		create: function(request, response){
			console.log("Server / Ctrl / Appointments - Create", request.body)
			var appt = new Appointment;
			appt.name = request.body.name;
			appt.date = request.body.date;
			appt.time = request.body.time;
			appt.complaint = request.body.complaint
			appt.save(function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		},
		edit: function(request, response){
			console.log("Server / Ctrl / Appointments - Edit")
		},
		update: function(request, response){
			console.log("Server / Ctrl / Appointments - Update", request.body)
			Appointment.findOneAndUpdate({_id:request.params.id}, request.body, function(err, record){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		},
		show: function(request, response){
			console.log("Server / Ctrl / Appointments - Show")
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Appointments - Destroy");
			console.log("Destroy params id:", request.params.id);
			Appointment.remove({_id:request.params.id}, function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}
	}
})();