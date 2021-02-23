let messageGroup1 = ['should', 'shouldn\'t', 'will', 'might', 'can\'t', 'can', 'could', 'wont'];
let messageGroup2 = ['eat', 'smell', 'take', 'have', 'steal', 'cook', 'use', 'trust', 'get'];
let messageGroup3 = ['a person', 'a cat', 'a house', 'a bath', 'anyone', 'some cheese', 'that guy', 'my chickens', 'them'];

let questionMessageGroup = ['Why don\'t', 'Couldn\'t', 'Will', 'Can', 'Might', 'Why can\'t', 'Could', 'Wont'];
// Defines the message groups the function will choose from

function returnMessage () {
  let randomNum = Math.floor(Math.random() * 2);
  // Generates a random number to decide weather or not to ask a question, or make a statement
  let message = [];
  // Defines an empty message
  if (randomNum === 1) {
    message = [['You'], messageGroup1[Math.floor(Math.random() * 8)], messageGroup2[Math.floor(Math.random() * 9)], `${messageGroup3[Math.floor(Math.random() * 9)]}!`];
    // Assigns a value to the message
  } else {
    message = [questionMessageGroup[Math.floor(Math.random() * 8)], ['you'], messageGroup2[Math.floor(Math.random() * 9)], `${messageGroup3[Math.floor(Math.random() * 9)]}?`];
    // Assigns a value to the message
  }
  return message.join(' ');
  // Returns the message
}

console.log(returnMessage());
// Logs the message
