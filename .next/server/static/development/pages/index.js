module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Ragu\\Desktop\\Utvikling\\hello-next\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/*import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
*/

/*const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-nextjs" />
            <PostLink id="learn-nextjs" />
            <PostLink id="deploy-nextjs" />
        </ul>
        <p>Hello Next.js</p>
    </Layout>
    );
}*/

/*const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
            <style jsx>{`
                h1,
                a {
                    font-family: 'Arial';
                }

                ul {
                    padding: 0;
                }

                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: blue;
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;
*/



function fetcher(url) {
  return fetch(url).then(r => r.json());
}

function Index() {
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(`/api/randomQuote${query.author ? '?author=' + query.author : ''}`, fetcher);
  const author = data === null || data === void 0 ? void 0 : data.author;
  let quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';
  return __jsx("main", {
    className: "jsx-321569281" + " " + "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-321569281" + " " + "quote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, quote), author && __jsx("span", {
    className: "jsx-321569281" + " " + "author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 24
    }
  }, "- ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "321569281",
    __self: this
  }, "main.jsx-321569281{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-321569281{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-321569281{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmFndVxcRGVza3RvcFxcVXR2aWtsaW5nXFxoZWxsby1uZXh0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0d3QixBQUcyQixBQU1VLEFBTUcsVUFYUCxVQU1GLEdBTUEsR0FYSSxRQU1ILEdBTUEsT0FYRyxLQU1FLEdBTXBCLFVBWEEsT0FNQSIsImZpbGUiOiJDOlxcVXNlcnNcXFJhZ3VcXERlc2t0b3BcXFV0dmlrbGluZ1xcaGVsbG8tbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyppbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuKi9cclxuXHJcbi8qY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXHJcbiAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cHJvcHMuaWR9YH0+XHJcbiAgICAgICAgICAgIDxhPntwcm9wcy5pZH08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0anNcIiAvPlxyXG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiAvPlxyXG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgLz5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxwPkhlbGxvIE5leHQuanM8L3A+XHJcbiAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn0qL1xyXG5cclxuLypjb25zdCBJbmRleCA9IHByb3BzID0+IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuKi9cclxuXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuXHJcbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoXHJcbiAgICAgICAgYC9hcGkvcmFuZG9tUXVvdGUke3F1ZXJ5LmF1dGhvciA/ICc/YXV0aG9yPScgKyBxdWVyeS5hdXRob3IgOiAnJ31gLFxyXG4gICAgICAgIGZldGNoZXJcclxuICAgICk7XHJcbiAgICBjb25zdCBhdXRob3IgPSBkYXRhPy5hdXRob3I7XHJcbiAgICBsZXQgcXVvdGUgPSBkYXRhPy5xdW90ZTtcclxuXHJcbiAgICBpZiAoIWRhdGEpIHF1b3RlID0gJ0xvYWRpbmcuLi4nO1xyXG4gICAgaWYgKGVycm9yKSBxdW90ZSA9ICdGYWlsZWQgdG8gZmV0Y2ggdGhlIHF1b3RlLic7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cclxuICAgICAgICAgICAge2F1dGhvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj4tIHthdXRob3J9PC9zcGFuPn1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucXVvdGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2UyNDNkZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU5ODM0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Ragu\\\\Desktop\\\\Utvikling\\\\hello-next\\\\pages\\\\index.js */"));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ragu\Desktop\Utvikling\hello-next\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map