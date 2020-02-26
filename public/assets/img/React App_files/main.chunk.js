(this["webpackJsonpdemo-app"] = this["webpackJsonpdemo-app"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PortfolioContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PortfolioContainer */ "./src/components/PortfolioContainer.js");
var _jsxFileName = "/Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/src/App.js";



function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortfolioContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/NavTabs.js":
/*!***********************************!*\
  !*** ./src/components/NavTabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../../../../../node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/src/components/NavTabs.js";



function NavTabs() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: window.location.pathname === '/' ? 'nav-link active' : 'nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about",
    className: window.location.pathname === '/about' ? 'nav-link active' : 'nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/blog",
    className: window.location.pathname === '/blog' ? 'nav-link active' : 'nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/contact",
    className: window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/contact/learn",
    className: window.location.pathname === '/contact/learn' ? 'nav-link active' : 'nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Learn")));
}

/* harmony default export */ __webpack_exports__["default"] = (NavTabs);

/***/ }),

/***/ "./src/components/PortfolioContainer.js":
/*!**********************************************!*\
  !*** ./src/components/PortfolioContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavTabs */ "./src/components/NavTabs.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./src/components/pages/Home.js");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/About */ "./src/components/pages/About.js");
/* harmony import */ var _pages_Blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Blog */ "./src/components/pages/Blog.js");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Contact */ "./src/components/pages/Contact.js");
var _jsxFileName = "/Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/src/components/PortfolioContainer.js";







class PortfolioContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      currentPage: 'Home'
    };

    this.renderPage = () => {
      // if (this.state.currentPage === 'Home') {
      // 	return <Home />;
      // } else if (this.state.currentPage === 'About') {
      // 	return <About />;
      // } else if (this.state.currentPage === 'Blog') {
      // 	return <Blog />;
      // } else {
      // 	return <Contact />;
      // }
      const {
        currentPage
      } = this.state;

      switch (currentPage) {
        case 'Home':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          });

        case 'About':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          });

        case 'Blog':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Blog__WEBPACK_IMPORTED_MODULE_4__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          });

        case 'Contact':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          });

        default:
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          });
      }
    };

    this.handlePageChange = page => {
      this.setState({
        currentPage: page
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavTabs__WEBPACK_IMPORTED_MODULE_1__["default"], {
      currentPage: this.state.currentPage,
      handlePageChange: this.handlePageChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), this.renderPage());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PortfolioContainer);

/***/ }),

/***/ "./src/components/pages/About.js":
/*!***************************************!*\
  !*** ./src/components/pages/About.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/src/components/pages/About.js";


function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "About Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at."));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/pages/Blog.js":
/*!**************************************!*\
  !*** ./src/components/pages/Blog.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/src/components/pages/Blog.js";


function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Blog Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc, sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque vehicula sit amet at augue. Maecenas aliquam bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis, est ligula suscipit velit, sed bibendum turpis dui in sapien."));
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./src/components/pages/Contact.js":
/*!*****************************************!*\
  !*** ./src/components/pages/Contact.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/src/components/pages/Contact.js";


function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Contact Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus. Etiam vel condimentum magna, quis tempor nulla."));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/pages/Home.js":
/*!**************************************!*\
  !*** ./src/components/pages/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/src/components/pages/Home.js";


function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Home Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus."));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), document.getElementById("root"));

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/branford/VU_Class/VU-VIRT-FSF-PT-09-2019-U-LOL/01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/pupster/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map