class Router{
    constructor(){

    }
    routeToModule(name){
        System.import('./modules/' + name + '/' + name);
    }
}

export default Router;