var {allUsers} = require('../controllers/userController');
const routes = [
    {
        path: '/',
        method: 'get',
        view: 'Home.html'
    },
    {
        path: '/about',
        method: 'post',
        action: 'This is a post method'
    },
    {
        path: '/users', 
        method:'get',
        action: allUsers
    }
]

module.exports = {
    routes: routes
}