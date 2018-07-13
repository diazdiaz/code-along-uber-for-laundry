const mongoose  = require('mongoose')
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const User = require('../models/user')

mongoose.connect('mongodb://localhost/uber-for-loundry', {useMongoClient: true});

const salt = bcrypt.genSaltSync(bcryptSalt);


let users = [
  {
    name: "Juan",
    email: "j@gmail.com",
    password: bcrypt.hashSync("123456", salt)
  },
  {
    name: "Kevin Parker",
    email: "tameimpala@gmail.com",
    password: bcrypt.hashSync("123456", salt)
  },
  {
    name: "Alex Turner",
    email: "artic@gmail.com",
    password: bcrypt.hashSync("123456", salt),
    isLaunderer: true,
    fee: 200
  }
]


User.collection.drop()

User.create(users, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${users.length} users`)
  mongoose.connection.close()
});
