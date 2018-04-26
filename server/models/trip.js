var mongoose = require('mongoose');
var User = require('./user');
var TripComponent = require('./trip-component');

var Schema = mongoose.Schema;

var tripSchema = new Schema({
    id: Schema.Types.ObjectId,
    components: [TripComponent],
    startDate: Date,
    endDate: Date,
    user: String
});

module.exports = tripSchema;