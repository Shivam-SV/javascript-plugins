var {user} = require('../database/users');

module.exports = {
    allUsers: async () => {
        let users = await user.all();
        return users;
    }
}