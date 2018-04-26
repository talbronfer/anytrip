var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var sessionSchema = new Schema({
    id: Schema.Types.ObjectId,
    email: String,
    status: String,
});

module.exports = sessionSchema;