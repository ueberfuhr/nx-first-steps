const cowsay = require('cowsay');
const messages = require('../messages');

console.log(
  cowsay.say({
    text: messages.message,
  })
);
