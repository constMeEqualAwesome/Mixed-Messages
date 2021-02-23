# Mixed-Messages

This project is a message generator that tells you what to do, every time the user runs this program they will get a new randomized output. The messages are made up of **three** pieces of data to make it random.

## Example:
> You should: trust no one.

*You* will stay constant but *should*, *trust*, and *no one* will be randomized.

## These are the randomized message parts:
```javascript
let messageGroup1 = ['should', 'shouldn\'t', 'will', 'might', 'can\'t', 'can', 'could', 'wont'];
let messageGroup2 = ['eat', 'smell', 'take', 'have', 'steal', 'cook', 'use', 'trust'];
let messageGroup3 = ['a person', 'a cat', 'a house', 'a bath', 'anyone', 'some cheese', 'that guy', 'my chickens'];
```
