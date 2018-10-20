const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});
// })

var hashedPassword = '$2a$10$E1Z.d7hYy5aP6JCnE8NkROShCboKjP2N6ys9/dVNrqr3RZz67T9AK';

bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
})

// JWT
// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded : ', decoded); 
// SHA 256
// var message = 'I am user3';
// var hash = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hash : ${hash}`);

// var data = {
// 	id: 4
// };

// var token = {
// 	data, 
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // data.id = 5;
// // Somesecret is salt, stored on the server.
// var resHash = SHA256(JSON.stringify(data) + 'somesecret').toString()

// if (resHash === token.hash) {
// 	console.log('Data was not changed');
// } else {
// 	console.log('Data was changed. Do not trust.');
// }