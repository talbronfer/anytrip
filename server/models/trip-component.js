var mongoose = require('mongoose');
var User = require('./user');
var Policy = require('./policy');

var Schema = mongoose.Schema;

var tripComponentSchema = new Schema({
    id: Schema.Types.ObjectId,
    activityType: String,
    name: String,
    location: Schema.Types.Mixed,
    provider: String,
    startDate: Date,
    endDate: Date,
    calculatedRiskFactor: Number,
    policies: [Policy],
    purchasedPolicies: [Policy]
});

module.exports = tripComponentSchema;