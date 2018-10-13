const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove() returns deleted doc
Todo.findOneAndRemove({"text" : "Something to do"}).then((todo) => {
	console.log(todo);
});

Todo.findByIdAndRemove('5bc1be9f75377c9552cb52f7').then((todo) => {
	console.log(todo);
});