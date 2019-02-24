console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

let filteredArray = _.uniq(['Alan', 1, 'Alan', 1, 2, 3, 4]);
console.log(filteredArray);

console.log(_.isString(true));
console.log(_.isString('Alan'));

console.log('Result:', notes.add(2, 2));

let res = notes.addNote();
console.log(res);

let user = os.userInfo();

// Option One
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
})

// // Option Two
// fs.appendFileSync('greetings.txt', 'My name is Alan!');