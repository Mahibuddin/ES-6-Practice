/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// const a = 10;\n// const b = 20;\n\n// const sum = (a, b) => a+b;\n\n// console.log(sum(a, b));\n\n\n// const x = 23;\n\n// x = 14;  // const e eta valid na...\n\n// console.log(x);\n\n\n// const arr = [];\n\n// arr.push(10);\n// arr.push(15);\n\n// arr = [];  // const e eta valid na...\n\n// console.log(arr);\n\n// jokhon kono variable or object er value change korte chachchi na tokhon const use korbo... & jodi variable er value change korte chai, tokhon var or let use korbo...\n\n\n// var a = 10;\n\n// console.log(a);\n\n// if (true) {\n//     a = 20;\n//     console.log(a); \n// }\n\n// console.log(a);\n\n\n// let b = 10;\n\n// console.log(b);\n\n// if (true) {\n//     let b = 20;\n//     console.log(b); \n// }\n\n// console.log(b);\n\n\n// function demo(){\n//     {\n//         let x = 20; \n//         {\n//             const x = 15;\n//             console.log(x);\n\n//            // x = 18; // its not valid \n\n//         }\n\n//         x = 19; // its valid [becose let hochche block lebel variable declearation er jonno bebohar kora hoy...]\n//         console.log(x);\n\n//     }\n\n//     // console.log(x); // undefined\n\n// }\n\n// demo();\n\n\n// template string\n\nvar name = 'Mahib';\nvar age = 32;\nvar email = 'mahibuddin@gmail.com';\n\n// const details = 'Name: ' + name + 'Age: ' + age + 'Email: ' + email\n\nvar details = 'Name = ' + name + ', Age = ' + age + ', Email = ' + email;\n\nconsole.log(details);\n\n// alert('Webpack is Awesome...');\n\n\n// Arrow function\n\n// const print = name => {\n//     console.log('Hello ', name); \n// }\n\n// print('Mahib');\n\n\nvar addMe = function addMe(a, b) {\n    return a + b;\n};\nconsole.log(addMe(10, 5));\n\nvar sqr = function sqr(x) {\n    return x * x;\n};\nconsole.log(sqr(12));\n\n// normal function declaration\n\n//  const obj  = {\n//      name: 'Mahib Uddin',\n//      print: function(){\n//          setTimeout(function(){\n//              console.log(this);\n//          }.bind(this), 1000);\n//      }\n//  }\n\n//  obj.print();\n\n\n// Arrow function declaration\n\nvar obj = {\n    name: 'Mahib Uddin',\n    print: function print() {\n        var _this = this;\n\n        setTimeout(function () {\n            console.log(_this.name);\n        }, 1000);\n    }\n};\n\nobj.print();\n\n// Enhance Object\n\nvar nam = \"Mahib\";\n\nvar mail = \"mahib.gmail.com\";\n\nvar Cat = {\n    nam: nam,\n    mail: mail,\n\n    print: function print() {\n        console.log(this.nam, this.mail);\n    }\n};\n\nCat.print();\n\nconsole.dir(Cat);\n\n// Destructure Object\n\nvar book = {\n    bookname: 'himu',\n    author: 'humayun'\n};\n\nvar bookname = book.bookname,\n    author = book.author;\n\nconsole.log(bookname, author);\n\nfunction print(bookname, author) {\n    console.log('Hello ' + bookname + '; Author ' + author);\n}\n\nprint(bookname, author);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });