var mongoose = require('mongoose');

var user = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minLength:1,
		trim: true
	},
});

module.exports = {user};

// Access this file using const {user} = require('./../server/models/user');
