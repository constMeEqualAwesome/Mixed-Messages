/* jshint esversion: 6 */

let message1Group1 = ['should', 'shouldn\'t', 'will', 'might', 'can\'t', 'can', 'could', 'wont'];
let message1Group2 = ['eat', 'smell', 'take', 'mug', 'steal', 'cook', 'use', 'poop on', 'have'];
let message1Group3 = ['a person', 'a cat', 'a house', 'a bath', 'anyone', 'some cheese', 'that guy', 'my chickens', 'them'];

let questionMessageGroup1 = ['Why don\'t', 'Couldn\'t', 'Will', 'Can', 'Might', 'Why can\'t', 'Could', 'Wont'];

let message2Group1 = ['may', 'could', 'didn\'t', 'did', 'could possibly maybe', 'shouldn\'t', 'are a butt who will:'];
let message2Group2 = ['slap', 'throw', 'chew on', 'pummel', 'squish', 'inhale', 'fart on'];
let message2Group3 = ['a butt crevice', 'an orange', 'some steak', 'a road', 'a chair', 'a chicken burger', 'a spoon'];

const el = document.getElementById('message');
el.textContent = ` Random Message: ${(function() {
  let randomNum1 = Math.floor(Math.random() * 2);
  let randomNum2 = Math.floor(Math.random() * 3);
  let message;
  if (randomNum1 === 1) {
    if (randomNum2 === 1) {
      message = ['You', message1Group1[Math.floor(Math.random() * 8)], message1Group2[Math.floor(Math.random() * 9)], `${message1Group3[Math.floor(Math.random() * 9)]}!`];
    } else if (randomNum2 === 2){
      message = [questionMessageGroup1[Math.floor(Math.random() * 8)], 'you', message1Group2[Math.floor(Math.random() * 9)], `${message1Group3[Math.floor(Math.random() * 9)]}?`];
    } else {
      message = ['You', message2Group1[Math.floor(Math.random() * 7)], message2Group2[Math.floor(Math.random() * 7)], `${message2Group3[Math.floor(Math.random() * 7)]}!`];
    }
  } else {
    if (randomNum2 === 1) {
      message = ['You', message2Group1[Math.floor(Math.random() * 7)], message2Group2[Math.floor(Math.random() * 7)], `${message2Group3[Math.floor(Math.random() * 7)]}!`];
    } else if (randomNum2 === 2){
      message = ['You', message2Group1[Math.floor(Math.random() * 7)], message1Group2[Math.floor(Math.random() * 9)], `${message2Group3[Math.floor(Math.random() * 7)]}!`];
    } else {
      message = [questionMessageGroup1[Math.floor(Math.random() * 8)], 'you', message2Group2[Math.floor(Math.random() * 7)], `${message1Group3[Math.floor(Math.random() * 9)]}?`];
    }
  }
  return message.join(' ');
}())}`;
