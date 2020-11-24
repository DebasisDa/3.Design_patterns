const User = require('./user');

class Admin extends User {
  constructor(name, email, password) {
    super(name, email, password);
    console.log('inside Admin constructor');
  }

  display() {
    console.log('=====Admin====>>>');
    console.log('name => ', this.name);
    console.log('email => ', this.email);
    console.log('password => ', this.password);
  }
}

module.exports = Admin;
