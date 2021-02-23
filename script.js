let messageGroup1 = ['should', 'shouldn\'t', 'will', 'might', 'can\'t', 'can', 'could', 'wont'];
let messageGroup2 = ['eat', 'smell', 'take', 'have', 'steal', 'cook', 'use', 'trust'];
let messageGroup3 = ['a person', 'a cat', 'a house', 'a bath', 'anyone', 'some cheese', 'that guy', 'my chickens'];

function returnMessage () {
  let message = [['You'], messageGroup1[Math.floor(Math.random() * 9)], messageGroup2[Math.floor(Math.random() * 9)], messageGroup3[Math.floor(Math.random() * 9)], ['.']]
  return message.join(' ');
}

console.log(returnMessage());

