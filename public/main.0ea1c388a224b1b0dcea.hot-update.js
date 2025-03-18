"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefrontend_dev_test"]("main",{

/***/ "./src/ts/components/anchorController.ts":
/*!***********************************************!*\
  !*** ./src/ts/components/anchorController.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst anchorController = () => {\r\n    const btn = document.querySelector(\".js-back-to-top\");\r\n    const links = document.querySelectorAll(\".js-section-link a\");\r\n    const sections = document.querySelectorAll(\".js-section\");\r\n    const navigation = document.querySelector(\"#navigation\");\r\n    const getSectionOffset = (section) => section.offsetTop - 60;\r\n    const scrollToTarget = (element, top) => {\r\n        if (!element)\r\n            return;\r\n        element.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            window.scrollTo({\r\n                top,\r\n                left: 0,\r\n                behavior: \"smooth\",\r\n            });\r\n            if (navigation.classList.contains(\"navigation--mobile-active\")) {\r\n                navigation.classList.remove(\"navigation--mobile-active\");\r\n            }\r\n        });\r\n    };\r\n    const updateOffsets = () => {\r\n        links.forEach((link) => {\r\n            const dataName = link.parentElement.getAttribute(\"data-name\");\r\n            sections.forEach((section) => {\r\n                const sectionID = section.id;\r\n                if (dataName === sectionID) {\r\n                    scrollToTarget(link, getSectionOffset(section));\r\n                }\r\n            });\r\n        });\r\n    };\r\n    updateOffsets();\r\n    scrollToTarget(btn, 0);\r\n    window.addEventListener(\"resize\", () => {\r\n        updateOffsets();\r\n    });\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (anchorController);\r\n\n\n//# sourceURL=webpack://frontend-dev-test/./src/ts/components/anchorController.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "239aa4f8bd023d84e8e2"; }
/******/ }();
/******/ 
/******/ }
);