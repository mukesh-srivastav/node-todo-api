const {MongoClient, ObjectID} = require('mongodb');
 
 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 	if (err) {
 		return	console.log('Unable to connect to MongoDB server.');
 	}
 	console.log('Connected to MongoDB server');

 	// db.collection('Todos').findOneAndUpdate({
 	// 	_id : new ObjectID('5bbe28193f53294b7a5bc2e8')
 	// }, {
 	// 	$set: {
 	// 		completed: true
 	// 	}
 	// }, {
 	// 	returnOriginal: false
 	// }).then((result) => {
 	// 	console.log(result);
 	// });

 	db.collection('Users').findOneAndUpdate({
 		_id : new ObjectID('5bbcf0fd3cb7534e73d918ce')
 	}, {
 		$set: {
 			name: 'Mark'
 		},
 		$inc: {
 			age: 1
 		}
 	}, {
 		returnOriginal: false
 	}).then((result) => {
 		console.log(result);
 	});
 	db.close();
 });