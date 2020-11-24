const Customer = require('./customer');
const Admin = require('./admin');

module.exports = class CreateObject {
  constructor(type, name, email, password, country) {
    if (type === 'Customer') {
      return new Customer(name, email, password, country);
    }
    if (type === 'Admin') {
      return new Admin(name, email, password);
    }
  }
};
