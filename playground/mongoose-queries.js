const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

// var id = '5bbfa01b4e09069c0460e355';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Todos not found');
// 	}
// 	console.log('Todo', todo);
// }).catch((e) => console.log(e));

user.findById('5bbf8bd9acb0b1bf713f390b').then((user) => {
	if (!user) {
		return console.log('User not found');
	} 
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e)
});
