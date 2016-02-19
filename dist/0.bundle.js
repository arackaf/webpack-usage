webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_script_util_Global__ = __webpack_require__(15);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_script_util_Global___default = __WEBPACK_IMPORTED_MODULE_0_script_util_Global__ && __WEBPACK_IMPORTED_MODULE_0_script_util_Global__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_script_util_Global__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_script_util_Global__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_script_util_Global___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_script_util_Global___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SharedUtilities_SharedUtility1__ = __webpack_require__(11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SharedUtilities_SharedUtility1___default = __WEBPACK_IMPORTED_MODULE_1__SharedUtilities_SharedUtility1__ && __WEBPACK_IMPORTED_MODULE_1__SharedUtilities_SharedUtility1__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1__SharedUtilities_SharedUtility1__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1__SharedUtilities_SharedUtility1__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1__SharedUtilities_SharedUtility1___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1__SharedUtilities_SharedUtility1___default });



	class Contacts{
	    constructor(data){
	        this.data = data;
	        this.sharedUtil1 = new /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__SharedUtilities_SharedUtility1___default.a();
	    }
	    contactsMethod1(){

	    }
	    contactsMethod2(){

	    }
	    contactsMethod3(){

	    }
	}

	/* harmony default export */ exports["default"] = Contacts

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
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
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	module.exports = "function globalFunction1(){\r\n\r\n}\r\n\r\nfunction globalFunction2(){\r\n\r\n}"

/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14)(__webpack_require__(13))

/***/ }
]);