const CreateObject = require('./factory');

const user1 = new CreateObject('Customer', 'Debasis Das',
  'debasis@gmail.com', 'Debasis@123', 'Kolkata');
const admin1 = new CreateObject('Admin', 'Indranil',
  'indranil@gmail.com', 'indranil@123');
user1.display();
admin1.display();
