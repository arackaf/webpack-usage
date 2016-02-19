class Router{
    constructor(){

    }
    routeToModule(name){
        System.import('./modules/' + name + '/' + name + '.js');
    }
}

window.router = new Router();