webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
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
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  var _useeRouter = useeRouter(),
      query = _useeRouter.query;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])("/api/randomQuote".concat(query.author ? '?author=' + query.author : ''), fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  var author = data === null || data === void 0 ? void 0 : data.author;
  var quote = data === null || data === void 0 ? void 0 : data.quote;
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
  }, "main.jsx-321569281{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-321569281{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-321569281{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmFndVxcRGVza3RvcFxcVXR2aWtsaW5nXFxoZWxsby1uZXh0XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0d3QixBQUcyQixBQU1VLEFBTUcsVUFYUCxVQU1GLEdBTUEsR0FYSSxRQU1ILEdBTUEsT0FYRyxLQU1FLEdBTXBCLFVBWEEsT0FNQSIsImZpbGUiOiJDOlxcVXNlcnNcXFJhZ3VcXERlc2t0b3BcXFV0dmlrbGluZ1xcaGVsbG8tbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyppbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuKi9cclxuXHJcbi8qY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXHJcbiAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cHJvcHMuaWR9YH0+XHJcbiAgICAgICAgICAgIDxhPntwcm9wcy5pZH08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0anNcIiAvPlxyXG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiAvPlxyXG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgLz5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxwPkhlbGxvIE5leHQuanM8L3A+XHJcbiAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn0qL1xyXG5cclxuLypjb25zdCBJbmRleCA9IHByb3BzID0+IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuKi9cclxuXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuXHJcbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKFxyXG4gICAgICAgIGAvYXBpL3JhbmRvbVF1b3RlJHtxdWVyeS5hdXRob3IgPyAnP2F1dGhvcj0nICsgcXVlcnkuYXV0aG9yIDogJyd9YCxcclxuICAgICAgICBmZXRjaGVyXHJcbiAgICApO1xyXG4gICAgY29uc3QgYXV0aG9yID0gZGF0YT8uYXV0aG9yO1xyXG4gICAgbGV0IHF1b3RlID0gZGF0YT8ucXVvdGU7XHJcblxyXG4gICAgaWYgKCFkYXRhKSBxdW90ZSA9ICdMb2FkaW5nLi4uJztcclxuICAgIGlmIChlcnJvcikgcXVvdGUgPSAnRmFpbGVkIHRvIGZldGNoIHRoZSBxdW90ZS4nO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVcIj57cXVvdGV9PC9kaXY+XHJcbiAgICAgICAgICAgIHthdXRob3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+LSB7YXV0aG9yfTwvc3Bhbj59XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMDBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnF1b3RlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNlMjQzZGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU1OTgzNDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Ragu\\\\Desktop\\\\Utvikling\\\\hello-next\\\\pages\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c12719eb0f44f0bd4fd4.hot-update.js.map