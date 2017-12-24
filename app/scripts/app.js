import svg4everybody from 'svg4everybody';
import $ from 'jquery';
$(() => {
	svg4everybody();
});

// NoUISlider Setting
let directionSlider = document.querySelector('.skill-range');

noUiSlider.create(directionSlider, {
	start: 30,
	range: {
		'min': 0,
		'max': 100
	}
});
