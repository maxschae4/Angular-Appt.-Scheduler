var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  date: { type: String, trim: true },
  time: { type: String, trim: true },
  complaint: { type: String, minlength: 10, trim: true }
});

mongoose.model('Appointment', AppointmentSchema);
AppointmentSchema.path('name').required(true, "Name is required");
// date validation here?
