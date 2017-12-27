webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	
	document.addEventListener("DOMContentLoaded", function (event) {
	
	  // Javascript Range Slide
	  var widthSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	  var directionSlider = document.querySelector('.skill-range');
	  if (widthSize > 720) {
	    // Desktop Setting
	    noUiSlider.create(directionSlider, {
	      start: 48.4,
	      orientation: 'horizontal',
	      range: {
	        'min': 0,
	        'max': 100
	      }
	    });
	  } else {
	    // Mobile Setting
	    noUiSlider.create(directionSlider, {
	      start: 61.9,
	      orientation: 'vertical',
	      range: {
	        'min': 0,
	        'max': 100
	      }
	    });
	  }
	
	  // TextArea Autosize
	  var textarea = document.querySelector('textarea');
	  textarea.addEventListener('keydown', autosize);
	  function autosize() {
	    var el = this;
	    setTimeout(function () {
	      el.style.cssText = 'height:auto; padding:0';
	      el.style.cssText = '-moz-box-sizing:content-box';
	      el.style.cssText = 'height:' + el.scrollHeight + 'px';
	    }, 0);
	  }
	
	  // Date Input Mask
	  var dateInput = document.querySelector('#date-input');
	  var dateMask = {
	    mask: '99/99/9999'
	  };
	  var date = new IMask(dateInput, dateMask);
	});

/***/ })
])
//# sourceMappingURL=0.9c7f7fb2d5b74cc9357a.hot-update.js.map