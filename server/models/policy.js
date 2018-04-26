var mongoose = require('mongoose');
var User = require('./user');
var TripComponent = require('./trip-component');

var Schema = mongoose.Schema;

var policySchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    permittedComponents: [TripComponent],
    basePrice: Number,
    isGeneralPolicy: Boolean
});

module.exports = policySchema;