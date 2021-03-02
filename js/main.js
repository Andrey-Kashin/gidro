$(function () {
	$(".slider__inner").slick({
		dots: true,
		speed: 800,
		prevArrow: '<button class="section-slider__btn section-slider__btnprev"><img src = "../img/slider-1/prew-arrow.svg" alt="previous"></button>',
		nextArrow: '<button class="section-slider__btn section-slider__btnnext"><img src = "../img/slider-1/next-arrow.svg" alt="next"></button>',
		responsive: [
			{
				breakpoint: 770,
				settings: {
					arrows: false,
				}
			}
		]

	});


	$('.tab').on('click', function (e) {
		e.preventDefault();
		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs__content--active');
		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs__content--active');

		// Принудительная инициализация слайдера

		$('.product-slider').slick('setPosition');
	});

	// Замена цвета на кнопке при клике мышью

	$('.tabs-container__button-favorite').on('click', function () {
		$($(this)).toggleClass('button-favorite--active');
	});


	$(".product-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="product-slider__btn product-slider__btnprev"><img src = "../img/products/product-slider-arrow-prew.svg"></button>',
		nextArrow: '<button class="product-slider__btn product-slider__btnnext"><img src = "../img/products/product-slider-arrow-next.svg" alt="next"></button>',
	});

	$('.filter-style').styler();

	$('.filter__item-drop').on('click', function () {
		$(this).toggleClass('filter__item-drop--active');
		$(this).next().slideToggle(200);
	});
	$('.filter__item-extra').on('click', function () {
		$(this).toggleClass('filter__item-extra--active');
		$(this).next().slideToggle(200);
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 100000,
		max: 2000000,
		grid: false
	});

	$('.catalog__filter-btngrid').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
		$('.tabs-container__item-wrapper').removeClass('tabs-container__item-wrapper--line');
	});

	$('.catalog__filter-btnline').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
		$('.tabs-container__item-wrapper').addClass('tabs-container__item-wrapper--line');
	});


	$(function () {

		$("#rateYo").rateYo({
			starWidth: "20px",
			spacing: "6px",
			fullStar: true,
			ratedFill: "#1C62CD"
		});

	});

	$('.mobile-menu__btn').click(function() {
    $('.mobile-menu').toggleClass('mobile-menu-active');
});

});
