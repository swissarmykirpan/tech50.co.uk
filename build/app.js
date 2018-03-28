(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/client/components/Hello.tsx":
/*!*****************************************!*\
  !*** ./src/client/components/Hello.tsx ***!
  \*****************************************/
/*! exports provided: Hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hello", function() { return Hello; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ "./src/client/components/test.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
            x.name,
            " and ",
            this.props.compiler,
            " and ",
            this.props.framework));
    };
    return Hello;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIZWxsby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLElBQUksTUFBTSxRQUFRLENBQUM7QUFNMUI7SUFBMkIseUJBQStCO0lBQTFEOztJQVNBLENBQUM7SUFSQyxzQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQ0w7O1lBQ2MsQ0FBQyxDQUFDLElBQUk7O1lBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFROztZQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNwRSxDQUNOLENBQUM7SUFDSixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFURCxDQUEyQixLQUFLLENBQUMsU0FBUyxHQVN6QyJ9

/***/ }),

/***/ "./src/client/components/test.ts":
/*!***************************************!*\
  !*** ./src/client/components/test.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Test = /** @class */ (function () {
    function Test() {
    }
    Object.defineProperty(Test.prototype, "name", {
        get: function () {
            return "Gurpreet";
        },
        enumerable: true,
        configurable: true
    });
    return Test;
}());
/* harmony default export */ __webpack_exports__["default"] = (Test);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtJQUlBLENBQUM7SUFIQyxzQkFBSSxzQkFBSTthQUFSO1lBQ0UsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQUpELElBSUMifQ==

/***/ }),

/***/ "./src/client/index.tsx":
/*!******************************!*\
  !*** ./src/client/index.tsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Hello */ "./src/client/components/Hello.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hello__WEBPACK_IMPORTED_MODULE_2__["Hello"], { compiler: "Typescript1234Gurpreet", framework: "react" }), document.getElementById("example"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0MsUUFBUSxDQUFDLE1BQU0sQ0FDYixvQkFBQyxLQUFLLElBQUMsUUFBUSxFQUFDLHdCQUF3QixFQUFDLFNBQVMsRUFBQyxPQUFPLEdBQUcsRUFDN0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDbkMsQ0FBQyJ9

/***/ })

},[["./src/client/index.tsx","manifest","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSGVsbG8udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy90ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ087QUFDUiwyQ0FBMkMsMmtCOzs7Ozs7Ozs7Ozs7QUM5QjNDO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQ0FBMkMsdVI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2IzQztBQUNBO0FBQ2dCO0FBQ2hCLDZLQUE0Qyx5REFBeUQ7QUFDckcsMkNBQTJDLCtiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4vdGVzdFwiO1xudmFyIEhlbGxvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIZWxsbywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIZWxsbygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBIZWxsby5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeCA9IG5ldyBUZXN0KCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsXG4gICAgICAgICAgICBcIkhlbGxvIGZyb20gXCIsXG4gICAgICAgICAgICB4Lm5hbWUsXG4gICAgICAgICAgICBcIiBhbmQgXCIsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbXBpbGVyLFxuICAgICAgICAgICAgXCIgYW5kIFwiLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mcmFtZXdvcmspKTtcbiAgICB9O1xuICAgIHJldHVybiBIZWxsbztcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5leHBvcnQgeyBIZWxsbyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pU0dWc2JHOHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKSVpXeHNieTUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0QlFVRkJMRTlCUVU4c1MwRkJTeXhOUVVGTkxFOUJRVThzUTBGQlF6dEJRVU14UWl4UFFVRlBMRWxCUVVrc1RVRkJUU3hSUVVGUkxFTkJRVU03UVVGTk1VSTdTVUZCTWtJc2VVSkJRU3RDTzBsQlFURkVPenRKUVZOQkxFTkJRVU03U1VGU1F5eHpRa0ZCVFN4SFFVRk9PMUZCUTBVc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTnVRaXhQUVVGUExFTkJRMHc3TzFsQlEyTXNRMEZCUXl4RFFVRkRMRWxCUVVrN08xbEJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJPenRaUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVTndSU3hEUVVOT0xFTkJRVU03U1VGRFNpeERRVUZETzBsQlEwZ3NXVUZCUXp0QlFVRkVMRU5CUVVNc1FVRlVSQ3hEUVVFeVFpeExRVUZMTEVOQlFVTXNVMEZCVXl4SFFWTjZReUo5IiwidmFyIFRlc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGVzdCgpIHtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRlc3QucHJvdG90eXBlLCBcIm5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkd1cnByZWV0XCI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBUZXN0O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJblJsYzNRdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3U1VGQlFUdEpRVWxCTEVOQlFVTTdTVUZJUXl4elFrRkJTU3h6UWtGQlNUdGhRVUZTTzFsQlEwVXNUMEZCVHl4VlFVRlZMRU5CUVVNN1VVRkRjRUlzUTBGQlF6czdPMDlCUVVFN1NVRkRTQ3hYUVVGRE8wRkJRVVFzUTBGQlF5eEJRVXBFTEVsQlNVTWlmUT09IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IEhlbGxvIH0gZnJvbSBcIi4vY29tcG9uZW50cy9IZWxsb1wiO1xuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVsbG8sIHsgY29tcGlsZXI6IFwiVHlwZXNjcmlwdDEyMzRHdXJwcmVldFwiLCBmcmFtZXdvcms6IFwicmVhY3RcIiB9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnBibVJsZUM1MGMzZ2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVDBGQlR5eExRVUZMTEUxQlFVMHNUMEZCVHl4RFFVRkRPMEZCUXpGQ0xFOUJRVThzVVVGQlVTeE5RVUZOTEZkQlFWY3NRMEZCUXp0QlFVTnFReXhQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTEUxQlFVMHNiMEpCUVc5Q0xFTkJRVU03UVVGRk0wTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkRZaXh2UWtGQlF5eExRVUZMTEVsQlFVTXNVVUZCVVN4RlFVRkRMSGRDUVVGM1FpeEZRVUZETEZOQlFWTXNSVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkROMFFzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkRia01zUTBGQlF5SjkiXSwic291cmNlUm9vdCI6IiJ9