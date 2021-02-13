$(function () {
	$(".slider__inner").slick({
		dots: true,
		speed: 800,
		prevArrow: '<button class="section-slider__btn section-slider__btnprev"><img src = "/img/slider-1/prew-arrow.svg" alt="previous"></button>',
		nextArrow: '<button class="section-slider__btn section-slider__btnnext"><img src = "/img/slider-1/next-arrow.svg" alt="next"></button>',
	});


	$('.tab').on('click', function(e){
		e.preventDefault();
		$('.tab').removeClass('tab--active');
		$('.tabs__content').removeClass('tabs__content--active');
		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs__content--active');
	});

	// Замена цвета на кнопке при клике мышью

	$('.tabs-container__button-favorite').on('click', function(){
		$($(this)).toggleClass('button-favorite--active');
	});

});
