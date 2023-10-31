// Write your code here
const username = Symbol('username');
const password = Symbol('password');

const user = {
  [username]: 'userA',
  [password]: 'abc123',
  age: 2,
}

console.log(user.password);