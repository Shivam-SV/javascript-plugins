var url = require('url');
var {routes} = require('./routes');
var fs = require('fs');
const VIEW_PATH = "Pages";

var app = {
    isView: false,
    request: null,
    response: null,
    routes: {},
    supportedResponseTypes: {
        'html': 'text/html',
        'text': 'text/plain',
        'json': 'application/json'
    },
    currentRoute: null,
    init(request, response){
        this.request = request;
        this.response = response;
    },
    createRoutesFrom(routes){
        this.routes = routes;
    },
    parseUrl: req => url.parse(req.url).pathname,
    validateRequest(){
        // parsing the URL
        var path = this.parseUrl(this.request);
    
        // matching and getting the route
         this.currentRoute = routes.find(r => r.path == path);
    
         // if route Not match then response with 404
         if(!this.currentRoute){
            this.responseWith('json',{'message':'404 page not found'},404);            
            return false;
         }
    
         // if method is not same then send 405 response
    
         if(this.currentRoute.method.toLowerCase() != this.request.method.toLowerCase()){
            this.responseWith('json',{'message':'405 method not allowed'},405);            
            return false;
         }
         return true;
    },
    responseCorrespondingAction(){        
        let type = this.currentRoute.view != undefined ? 'html' : (typeof this.currentRoute.action == 'object' ? 'json' : 'text');
        this.responseWith(type, this.currentRoute.action != undefined ? (typeof this.currentRoute.action == 'function' ? this.currentRoute.action() : this.currentRoute.action) : this.view(this.currentRoute.view));
    },
    responseWith: (type, content, statusCode = 200) => {
        let contentType = "";
        contentType = Object.keys(app.supportedResponseTypes).indexOf(type) != -1 ? app.supportedResponseTypes[type] : 'text/plain';        
        app.response.writeHead(200, {"Content-type": contentType});
        app.response.end(type == 'json' ? JSON.stringify(content) : content);
    },
    view:(name) => {
        this.isView = true
        return fs.readFileSync(`${VIEW_PATH}/${name}`)
    }
}

module.exports = {
    app,    
};