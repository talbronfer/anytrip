var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    userInfo: Schema.Types.Mixed
});

module.exports = userSchema;