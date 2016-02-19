webpackJsonp([1],{

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	__webpack_require__.e/* nsure */(10).catch(function(err) { __webpack_require__.oe(err); }).then(function(require) {
		data = __webpack_require__(12);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	}.bind(null, __webpack_require__));

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SharedUtilities_SharedUtility1__ = __webpack_require__(11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SharedUtilities_SharedUtility1___default = __WEBPACK_IMPORTED_MODULE_0__SharedUtilities_SharedUtility1__ && __WEBPACK_IMPORTED_MODULE_0__SharedUtilities_SharedUtility1__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0__SharedUtilities_SharedUtility1__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0__SharedUtilities_SharedUtility1__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0__SharedUtilities_SharedUtility1___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0__SharedUtilities_SharedUtility1___default });


	class Tasks{
	    constructor(data){
	        this.data = data;
	        this.sharedUtil1 = new /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__SharedUtilities_SharedUtility1___default.a();
	    }
	    tasksMethod1(){

	    }
	    tasksMethod2(){

	    }
	    tasksMethod3(){

	    }
	}

	/* harmony default export */ exports["default"] = Tasks

/***/ }

});