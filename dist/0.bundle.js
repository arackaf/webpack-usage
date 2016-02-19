webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);

	class Contacts{
	    constructor(data){
	        this.data = data;
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
/***/ function(module, exports) {

	module.exports = "function globalFunction1(){\r\n\r\n}\r\n\r\nfunction globalFunction2(){\r\n\r\n}"

/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12)(__webpack_require__(11))

/***/ }
]);