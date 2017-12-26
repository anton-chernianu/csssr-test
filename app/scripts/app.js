// NoUISlider Setting
var directionSlider = document.querySelector('.skill-range');

noUiSlider.create(directionSlider, {
	start: 48.4,
	range: {
		'min': 0,
		'max': 100
	}
});

// TextArea Autosize
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
