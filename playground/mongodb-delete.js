const {MongoClient, ObjectID} = require('mongodb');
 
 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 	if (err) {
 		return	console.log('Unable to connect to MongoDB server.');
 	}
 	console.log('Connected to MongoDB server');

 	//deleteMany. 
 	// db.collection('Users').deleteMany({name: 'Michael'}).then((result) => {
 	// 	console.log(result);
 	// });

 // 	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Task2'}).then((result) => {
 // 		console.log(result);
 // 	}); 	

	//findOneAndDelete
	db.collection('Users').findOneAndDelete({_id: '368a'}).then((result) => {
 		console.log(result);
 	}); 	
 	db.close();
 });