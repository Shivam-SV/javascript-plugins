var http = require('http');
var fs = require('fs');
var url = require('url');
var {routes} = require('./routes.js');
http.createServer((req, res) => {
    let path = url.parse(req.url).pathname;    
    let route = routes.find(r => r.path === path)
    if(route){
        fs.readFile(`pages/${route.page}`, function(err, pgRes){            
            if(!err){
                res.writeHead(200,{'Content-type':'text/html'})
                res.end(pgRes);
            }else {
                res.writeHead(404, {"Content-type":'application/json'});
                res.write(JSON.stringify({'message': '404 page not found'}));
                res.end();
            }
        })
    }
}).listen(8080);

