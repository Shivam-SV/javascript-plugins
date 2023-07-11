var {model} = require('./models');

const user = model;
user.useTable('users');

module.exports.user = user;