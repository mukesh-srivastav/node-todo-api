var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var localUrl = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(process.env.MONGODB_URI || process.env.PROD_MONGODB || localUrl);

module.exports = {
	mongoose
};