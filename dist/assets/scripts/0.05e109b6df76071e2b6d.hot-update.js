webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});
	
	// NoUISlider Setting
	var directionSlider = document.getElementById('skill-range');
	
	noUiSlider.create(directionSlider, {
		start: 20,
		direction: 'rtl',
		range: {
			'min': 0,
			'max': 100
		}
	});

/***/ })
])
//# sourceMappingURL=0.05e109b6df76071e2b6d.hot-update.js.map