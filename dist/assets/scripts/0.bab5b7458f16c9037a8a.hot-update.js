webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	
	// NoUISlider Setting
	var directionSlider = document.querySelector('.skill-range');
	
	noUiSlider.create(directionSlider, {
	  start: 48.4,
	  range: {
	    'min': 0,
	    'max': 100
	  }
	});
	
	var textarea = document.querySelector('textarea');
	
	textarea.addEventListener('keydown', autosize);
	
	function autosize() {
	  var el = this;
	  setTimeout(function () {
	    el.style.cssText = 'height:auto; padding:0';
	    // for box-sizing other than "content-box" use:
	    el.style.cssText = '-moz-box-sizing:content-box';
	    el.style.cssText = 'height:' + el.scrollHeight + 'px';
	  }, 0);
	}
	
	// import svg4everybody from 'svg4everybody';
	// import $ from 'jquery';
	// $(() => {
	// 	svg4everybody();
	// });

/***/ })
])
//# sourceMappingURL=0.bab5b7458f16c9037a8a.hot-update.js.map