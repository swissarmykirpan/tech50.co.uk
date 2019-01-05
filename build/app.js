(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/components/Hello.tsx":
/*!**********************************!*\
  !*** ./src/components/Hello.tsx ***!
  \**********************************/
/*! exports provided: Hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hello", function() { return Hello; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ "./src/components/test.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        var x = new _test__WEBPACK_IMPORTED_MODULE_1__["default"]();
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null,
            "Hello from ",
            x.firstName,
            x.lastName));
    };
    return Hello;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIZWxsby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLElBQUksTUFBTSxRQUFRLENBQUM7QUFNMUI7SUFBMkIseUJBQStCO0lBQTFEOztJQVVBLENBQUM7SUFUQyxzQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQ0w7O1lBQ2MsQ0FBQyxDQUFDLFNBQVM7WUFDdEIsQ0FBQyxDQUFDLFFBQVEsQ0FDUixDQUNOLENBQUM7SUFDSixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFWRCxDQUEyQixLQUFLLENBQUMsU0FBUyxHQVV6QyJ9

/***/ }),

/***/ "./src/components/test.ts":
/*!********************************!*\
  !*** ./src/components/test.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Test = /** @class */ (function () {
    function Test() {
    }
    Object.defineProperty(Test.prototype, "firstName", {
        get: function () {
            return "Gurpreet";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Test.prototype, "lastName", {
        get: function () {
            return "Sohal";
        },
        enumerable: true,
        configurable: true
    });
    return Test;
}());
/* harmony default export */ __webpack_exports__["default"] = (Test);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtJQU9BLENBQUM7SUFOQyxzQkFBSSwyQkFBUzthQUFiO1lBQ0UsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSwwQkFBUTthQUFaO1lBQ0UsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQVBELElBT0MifQ==

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Hello */ "./src/components/Hello.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hello__WEBPACK_IMPORTED_MODULE_2__["Hello"], { compiler: "Typescript1234Gurpreet", framework: "react" }), document.getElementById("root"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0MsUUFBUSxDQUFDLE1BQU0sQ0FDYixvQkFBQyxLQUFLLElBQUMsUUFBUSxFQUFDLHdCQUF3QixFQUFDLFNBQVMsRUFBQyxPQUFPLEdBQUcsRUFDN0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsQ0FBQyJ9

/***/ })

},[["./src/index.tsx","manifest","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWxsby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDeUI7QUFDQTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQUk7QUFDeEIsZ0JBQWdCLDRDQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsNENBQUs7QUFDVTtBQUNqQiwyQ0FBMkMsdWhCOzs7Ozs7Ozs7Ozs7QUM5QjNDO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ2MsbUVBQUksRUFBQztBQUNwQiwyQ0FBMkMsdVc7Ozs7Ozs7Ozs7OztBQ3BCM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ087QUFDVTtBQUMzQyxnREFBUSxRQUFRLDRDQUFLLGVBQWUsdURBQUssR0FBRyx5REFBeUQ7QUFDckcsMkNBQTJDLCtiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4vdGVzdFwiO1xudmFyIEhlbGxvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIZWxsbywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIZWxsbygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBIZWxsby5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IG5ldyBUZXN0KCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsXG4gICAgICAgICAgICBcIkhlbGxvIGZyb20gXCIsXG4gICAgICAgICAgICB4LmZpcnN0TmFtZSxcbiAgICAgICAgICAgIHgubGFzdE5hbWUpKTtcbiAgICB9O1xuICAgIHJldHVybiBIZWxsbztcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5leHBvcnQgeyBIZWxsbyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pU0dWc2JHOHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKSVpXeHNieTUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096dEJRVUZCTEU5QlFVOHNTMEZCU3l4TlFVRk5MRTlCUVU4c1EwRkJRenRCUVVNeFFpeFBRVUZQTEVsQlFVa3NUVUZCVFN4UlFVRlJMRU5CUVVNN1FVRk5NVUk3U1VGQk1rSXNlVUpCUVN0Q08wbEJRVEZFT3p0SlFWVkJMRU5CUVVNN1NVRlVReXh6UWtGQlRTeEhRVUZPTzFGQlEwVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU51UWl4UFFVRlBMRU5CUTB3N08xbEJRMk1zUTBGQlF5eERRVUZETEZOQlFWTTdXVUZEZEVJc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGRFVpeERRVU5PTEVOQlFVTTdTVUZEU2l4RFFVRkRPMGxCUTBnc1dVRkJRenRCUVVGRUxFTkJRVU1zUVVGV1JDeERRVUV5UWl4TFFVRkxMRU5CUVVNc1UwRkJVeXhIUVZWNlF5SjkiLCJ2YXIgVGVzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUZXN0KCkge1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGVzdC5wcm90b3R5cGUsIFwiZmlyc3ROYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJHdXJwcmVldFwiO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGVzdC5wcm90b3R5cGUsIFwibGFzdE5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlNvaGFsXCI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBUZXN0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJblJsYzNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3U1VGQlFUdEpRVTlCTEVOQlFVTTdTVUZPUXl4elFrRkJTU3d5UWtGQlV6dGhRVUZpTzFsQlEwVXNUMEZCVHl4VlFVRlZMRU5CUVVNN1VVRkRjRUlzUTBGQlF6czdPMDlCUVVFN1NVRkRSQ3h6UWtGQlNTd3dRa0ZCVVR0aFFVRmFPMWxCUTBVc1QwRkJUeXhQUVVGUExFTkJRVU03VVVGRGFrSXNRMEZCUXpzN08wOUJRVUU3U1VGRFNDeFhRVUZETzBGQlFVUXNRMEZCUXl4QlFWQkVMRWxCVDBNaWZRPT0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgSGVsbG8gfSBmcm9tIFwiLi9jb21wb25lbnRzL0hlbGxvXCI7XG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChIZWxsbywgeyBjb21waWxlcjogXCJUeXBlc2NyaXB0MTIzNEd1cnByZWV0XCIsIGZyYW1ld29yazogXCJyZWFjdFwiIH0pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKcGJtUmxlQzUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4TFFVRkxMRTFCUVUwc1QwRkJUeXhEUVVGRE8wRkJRekZDTEU5QlFVOHNVVUZCVVN4TlFVRk5MRmRCUVZjc1EwRkJRenRCUVVOcVF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc2IwSkJRVzlDTEVOQlFVTTdRVUZGTTBNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGRFlpeHZRa0ZCUXl4TFFVRkxMRWxCUVVNc1VVRkJVU3hGUVVGRExIZENRVUYzUWl4RlFVRkRMRk5CUVZNc1JVRkJReXhQUVVGUExFZEJRVWNzUlVGRE4wUXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGRGFFTXNRMEZCUXlKOSJdLCJzb3VyY2VSb290IjoiIn0=