 const {MongoClient, ObjectID} = require('mongodb');
 
 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 	if (err) {
 		return	console.log('Unable to connect to MongoDB server.');
 	}
 	console.log('Connected to MongoDB server');

 	// db.collection('Todos').find({
 	// 	_id: new ObjectID('5bbcedb4ccf3e24c872d4038')
 	// }).toArray().then((docs) => {
 	// 	console.log('Todos');
 	// 	console.log(JSON.stringify(docs, undefined, 2));
 	// }, (err) => {
 	// 	console.log('Unable to fetch todos', err);
 	// });

 	// db.collection('Todos').find({
 	// 	_id: new ObjectID('5bbcedb4ccf3e24c872d4038')
 	// }).count().then((count) => {
 	// 	console.log(`Todos count: ${count}`);
 	// }, (err) => {
 	// 	console.log('Unable to fetch todos', err);
 	// });

 	db.collection('Users').find({
 		name: 'Mukesh'
 	}).toArray().then((docs) => {
 		console.log(`Users:`);
 		console.log(JSON.stringify(docs, undefined, 2));
 	}, (err) => {
 		console.log('Unable to fetch todos', err);
 	});

 	// db.close();
 });