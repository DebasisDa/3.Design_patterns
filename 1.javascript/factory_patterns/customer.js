const User = require('./user');

class Customer extends User {
  constructor(name, email, password, country) {
    super(name, email, password);
    this.country = country;
    console.log('Inside customer constructor');
  }

  display() {
    console.log('=====Customer====>>>');
    console.log('name => ', this.name);
    console.log('email => ', this.email);
    console.log('password => ', this.password);
    console.log('country => ', this.country);
  }
}

module.exports = Customer;
