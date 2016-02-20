class Router{
    constructor(){

    }
    routeToModule(name){
        System.import('./modules/' + name + '/' + name).then(obj => {
            var x = new obj.default();
        });
    }
}

window.router = new Router();