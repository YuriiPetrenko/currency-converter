/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/converter.js":
/*!*********************************!*\
  !*** ./js/modules/converter.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Converter; }
/* harmony export */ });
class Converter {
  constructor(inputsSelector, sendInputSelector, receiveInputSelector, footerPLNSelector) {
    this.inputs = document.querySelectorAll(inputsSelector);
    this.sendInput = document.querySelector(sendInputSelector);
    this.receiveInput = document.querySelector(receiveInputSelector);
    this.footerPLN = document.querySelector(footerPLNSelector);
  }

  countRate(value, mid) {
    return +(value * mid).toFixed(2);
  }

  countBaseRate(value, mid) {
    return +(value / mid).toFixed(2);
  }

  rateCalculator(code, mid) {
    console.log(`${code} : ${mid}`);
    this.inputs.forEach(input => {
      input.addEventListener('input', e => {
        const target = e.target;
        const value = parseFloat(target.value);

        switch (target.name) {
          case 'send':
            this.receiveInput.value = this.countRate(value, mid);
            break;

          case 'receive':
            this.sendInput.value = this.countBaseRate(value, mid);
            break;
        }
      });
    });
  }

}

/***/ }),

/***/ "./js/service/service.js":
/*!*******************************!*\
  !*** ./js/service/service.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRate": function() { return /* binding */ getRate; }
/* harmony export */ });
const url = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp';

const getRate = async () => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch: ${url}, status: ${res.status}`);
  }

  return await res.json();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_converter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/converter.js */ "./js/modules/converter.js");
/* harmony import */ var _service_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/service.js */ "./js/service/service.js");


window.addEventListener('DOMContentLoaded', function () {
  const conv = new _modules_converter_js__WEBPACK_IMPORTED_MODULE_0__.default('.inputs', '#send', '#receive', '#mid');
  (0,_service_service_js__WEBPACK_IMPORTED_MODULE_1__.getRate)().then(data => {
    console.log(data);
    const {
      code,
      rates: [{
        mid
      }]
    } = data;
    conv.rateCalculator(code, mid); //add mid to footer

    conv.footerPLN.textContent = `${mid} PLN`;
  }).catch(err => console.log(err));
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map