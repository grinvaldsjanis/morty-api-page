/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"styles.css\");\n\n//# sourceURL=webpack://webpack_ts/./src/styles.scss?");

/***/ }),

/***/ "./src/scripts.ts":
/*!************************!*\
  !*** ./src/scripts.ts ***!
  \************************/
/***/ (() => {

eval("fetch('https://rickandmortyapi.com/api/character')\r\n    .then(function (response) { return response.json(); })\r\n    .then(function (data) { return generateCards(data.results); });\r\nfunction generateCards(results) {\r\n    var cardContainer = document.querySelector('#card-container');\r\n    results.forEach(function (character) {\r\n        var card = document.createElement('article');\r\n        card.classList.add('characterCard__Wrapper');\r\n        card.innerHTML = \"<div class=\\\"characterCard__ImgWrapper\\\">\\n        <img src=\\\"\".concat(character.image, \"\\\" alt=\\\"\").concat(character.name, \"\\\">\\n        </div>\\n        <div class=\\\"characterCard__ContentWrapper\\\">\\n        <div class=\\\"section\\\">\\n        <a href=\\\"\").concat(character.url, \"\\\" rel=\\\"noopener noreferrer\\\" target=\\\"_blank\\\" class=\\\"externalLink\\\">\\n        <h2>\").concat(character.name, \"</h2>\\n        </a><span class=\\\"status\\\"><span class=\\\"status__icon status__icon--\").concat(character.status.toLowerCase(), \"\\\"></span> \").concat(character.status, \" - \").concat(character.species, \"</span>\\n        </div>\\n        <div class=\\\"section\\\">\\n        <span class=\\\"text-gray\\\">Last known location:</span><a href=\\\"\").concat(character.location.link, \"\\\" rel=\\\"noopener noreferrer\\\" target=\\\"_blank\\\" class=\\\"externalLink\\\">\").concat(character.location.name, \"</a>\\n        </div>\\n        <div class=\\\"section\\\">\\n        <span class=\\\"text-gray\\\">First seen in:</span>\\n        <a href=\\\"\").concat(character.origin.link, \"\\\" rel=\\\"noopener noreferrer\\\" target=\\\"_blank\\\" class=\\\"externalLink\\\">\").concat(character.origin.name, \"</a>\\n        </div>\\n        </div>\\n        </article>\");\r\n        ///\r\n        cardContainer.appendChild(card);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/scripts.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/scripts.ts"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/styles.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;