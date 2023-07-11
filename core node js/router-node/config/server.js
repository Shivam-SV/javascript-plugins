var http = require('http');
const HTTP_PORT = 5000
var {app} = require('./app');
const routes = require('./routes');
// creating a server
app.createRoutesFrom(routes)
http.createServer((req, res) => {
    
    app.init(req, res);
    if(app.validateRequest()){
        app.responseCorrespondingAction();
    }

    res.end();
}).listen(HTTP_PORT);