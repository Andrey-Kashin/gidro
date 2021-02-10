$(function () {
	$(".slider__inner").slick({
		dots: true,
		speed: 800,
		prevArrow: '<button class="section-slider__btn section-slider__btnprev"><img src = "/img/slider-1/prew-arrow.svg" alt="previous"></button>',
		nextArrow: '<button class="section-slider__btn section-slider__btnnext"><img src = "/img/slider-1/next-arrow.svg" alt="next"></button>',
	});

	$('.search__link').on('click', function(e){
		e.preventDefault();
		$('.search__link').removeClass('search__link--active');
		$('.search__form-inner').removeClass('search__form-inner--active');
		$(this).addClass('search__link--active');
		$($(this).attr('href')).addClass('search__form-inner--active');
	});

});
