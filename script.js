let messageGroup1 = ['should', 'shouldn\'t', 'will', 'might', 'can\'t', 'can', 'could', 'wont'];
let messageGroup2 = ['eat', 'smell', 'take', 'have', 'steal', 'cook', 'use', 'trust', 'get'];
let messageGroup3 = ['a person', 'a cat', 'a house', 'a bath', 'anyone', 'some cheese', 'that guy', 'my chickens', 'them'];

let questionMessageGroup = ['Why don\'t', 'Couldn\'t', 'Will', 'Can', 'Might', 'Why can\'t', 'Could', 'Wont'];

function returnMessage () {
  let randomNum = Math.floor(Math.random() * 2);
  let message = [];
  if (randomNum === 1) {
    message = [['You'], messageGroup1[Math.floor(Math.random() * 8)], messageGroup2[Math.floor(Math.random() * 9)], `${messageGroup3[Math.floor(Math.random() * 9)]}!`];
  } else {
    message = [questionMessageGroup[Math.floor(Math.random() * 8)], ['you'], messageGroup2[Math.floor(Math.random() * 9)], `${messageGroup3[Math.floor(Math.random() * 9)]}?`];
  }
  return message.join(' ');
}

console.log(returnMessage());

