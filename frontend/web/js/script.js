
// Slider 
$(document).ready(function () {
	var $app = $('.app');
	var $img = $('.app__img');
	var $pageNav1 = $('.pages__item--1');
	var $pageNav2 = $('.pages__item--2');
	var animation = true;
	var curSlide = 1;
	var scrolledUp = void 0,
	    nextSlide = void 0;

	var pagination = function pagination(slide, target) {
		animation = true;
		if (target === undefined) {
			nextSlide = scrolledUp ? slide - 1 : slide + 1;
		} else {
			nextSlide = target;
		}

		$('.pages__item--' + nextSlide).addClass('page__item-active');
		$('.pages__item--' + slide).removeClass('page__item-active');

		$app.toggleClass('active');
		setTimeout(function () {
			animation = false;
		}, 3000);
	};

	var navigateDown = function navigateDown() {
		if (curSlide > 1) return;
		scrolledUp = false;
		pagination(curSlide);
		curSlide++;
	};

	var navigateUp = function navigateUp() {
		if (curSlide === 1) return;
		scrolledUp = true;
		pagination(curSlide);
		curSlide--;
	};

	setTimeout(function () {
		$app.addClass('initial');
	}, 1500);

	setTimeout(function () {
		animation = false;
	}, 4500);

	$(document).on('mousewheel DOMMouseScroll', function (e) {
		var delta = e.originalEvent.wheelDelta;
		if (animation) return;
		if (delta > 0 || e.originalEvent.detail < 0) {
			navigateUp();
		} else {
			navigateDown();
		}
	});

	$(document).on("click", ".pages__item:not(.page__item-active)", function () {
		if (animation) return;
		var target = +$(this).attr('data-target');
		pagination(curSlide, target);
		curSlide = target;
	});
});

$(".nav-link").on('click',function(){
	// let link_id = $(this);
	// let link_id_1 = $(link_id).attr('href');
	coonsole.log($(this));
});

// Проверка чтоб убрать лишнее
if ($('.contacts-one').offset().top < window.pageYOffset+window.innerHeight){
	$('.img_back').removeClass('position-fixed');
	$('.img_back').addClass('position-absolute');
}

//  animation details

$('.txt-caption').css({'opacity':'1','top':'0'});

window.onscroll = function() {
	let suitable_point = window.pageYOffset+window.innerHeight,
		cards_one = $('.cards-one'),
		cards_two = $('.cards-two'),
		cards_tree = $('.cards-tree'),
		cards_four = $('.cards-four'),
		cards_five = $('.cards-five'),
		cards_six = $('.cards-six'),
		contacts_one = $('.contacts-one'),
		contact_info_one = $('.contact-info-one'),
		contact_info_two = $('.contact-info-two'),
		contact_info_tree = $('.contact-info-tree'),
		contact_info_four = $('.contact-info-four'),
		contact_button = $('.contact-button'),
		img_back = $('.img_back');

	// 1 блок
	if (suitable_point*80/100 > cards_one.offset().top) {
		cards_one.css({'opacity':'1','top':'0'});
	}
	if (suitable_point*80/100 > cards_two.offset().top) {
		cards_two.css({'opacity':'1','top':'0'});
	}
	if (suitable_point*80/100 > cards_tree.offset().top) {
		cards_tree.css({'opacity':'1','top':'0'});
	}
	if (suitable_point*80/100 > cards_four.offset().top) {
		cards_four.css({'opacity':'1','top':'0'});
	}
	if (suitable_point*80/100 > cards_five.offset().top) {
		cards_five.css({'opacity':'1','top':'0'});
	}
	if (suitable_point*80/100 > cards_six.offset().top) {
		cards_six.css({'opacity':'1','top':'0'});
	}
	if (suitable_point*90/100 > contacts_one.offset().top) {
		contacts_one.css({'opacity':'1','top':'0'});
		img_back.removeClass('position-fixed');
		img_back.addClass('position-absolute');
	}
	if (suitable_point*90/100 < contacts_one.offset().top) {
		img_back.removeClass('position-absolute');
		img_back.addClass('position-fixed');
	}
	if (suitable_point*90/100 > contact_info_one.offset().top) {
		contact_info_one.css({'opacity':'1','top':'0'});
		contact_info_two.css({'opacity':'1','top':'0'});
		contact_info_tree.css({'opacity':'1','top':'0'});
		contact_info_four.css({'opacity':'1','top':'0'});
		contact_button.css({'opacity':'1','top':'0'});
	}
};
// menu burger house
$('.radio-group__input').on('click', function(){
	let menu_burger = $('.menu-burger');
	menu_burger.empty();
	switch ($(this).data('number')) {
		case 0:
			menu_burger.append('<div class="row z-ind-1 font-weight-bold"><div class="col-4 d-flex flex-column px-4"><span class="c-black f-s-26 pb-4 text-center">Говядина</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Гамбургер</span><span class="c-orange f-s-17 position-relative ml-auto">50 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Чизбургер</span><span class="c-orange f-s-17 position-relative ml-auto">60 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Стандарт бургер</span><span class="c-orange f-s-17 position-relative ml-auto">90 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Чили бургер</span><span class="c-orange f-s-17 position-relative ml-auto">105 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Фреш бургер</span><span class="c-orange f-s-17 position-relative ml-auto">115 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Хаус бургер</span><span class="c-orange f-s-17 position-relative ml-auto">130 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Двойной бургер</span><span class="c-orange f-s-17 position-relative ml-auto">170 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Большой стандарт бургер</span><span class="c-orange f-s-17 position-relative ml-auto">145 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Большой фреш бургер</span><span class="c-orange f-s-17 position-relative ml-auto">170 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Большой бекон бургер</span><span class="c-orange f-s-17 position-relative ml-auto">200 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Большой двойной хаус бургер</span><span class="c-orange f-s-17 position-relative ml-auto">270 ₽</span></div></div><div class="col-4 d-flex flex-column font-weight-bold border-left border-right px-4"><span class="c-black f-s-26 pb-4 text-center">Курица</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Стандарт бургер</span><span class="c-orange f-s-17 position-relative ml-auto">90 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Чили бургер</span><span class="c-orange f-s-17 position-relative ml-auto">105 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Фреш бургер</span><span class="c-orange f-s-17 position-relative ml-auto">115 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Хаус бургер</span><span class="c-orange f-s-17 position-relative ml-auto">130 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Двойной бургер</span><span class="c-orange f-s-17 position-relative ml-auto">170 ₽</span></div></div><div class="col-4 d-flex flex-column px-4"><span class="c-black font-weight-bold f-s-26 pb-4 text-center">Рыба</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Фиш бургер</span><span class="c-orange f-s-17 position-relative ml-auto">130 ₽</span></div></div></div>').hide().show('slow');
		break;
		case 1:
			menu_burger.append('<div class="row z-ind-1 font-weight-bold"><div class="col-3 d-flex flex-column px-4"><span class="c-black f-s-26 pb-4 text-center">Говядина</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Мини ролл</span><span class="c-orange f-s-17 position-relative ml-auto">55 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Бургер ролл</span><span class="c-orange f-s-17 position-relative ml-auto">120 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Хаус ролл</span><span class="c-orange f-s-17 position-relative ml-auto">130 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Кантри ролл</span><span class="c-orange f-s-17 position-relative ml-auto">130 ₽</span></div></div><div class="col-3 d-flex flex-column font-weight-bold border-left border-right px-4"><span class="c-black f-s-26 pb-4 text-center">Курица</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Бургер ролл</span><span class="c-orange f-s-17 position-relative ml-auto">120 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Хаус ролл</span><span class="c-orange f-s-17 position-relative ml-auto">120 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Кантри ролл</span><span class="c-orange f-s-17 position-relative ml-auto">130 ₽</span></div></div><div class="col-3 d-flex flex-column border-right px-4"><span class="c-black font-weight-bold f-s-26 pb-4 text-center">Рыба</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Фиш ролл</span><span class="c-orange f-s-17 position-relative ml-auto">140 ₽</span></div><span class="c-black font-weight-bold f-s-26 py-4 text-center">Овощи</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Веган ролл</span><span class="c-orange f-s-17 position-relative ml-auto">80 ₽</span></div></div><div class="col-3 d-flex flex-column px-4"><span class="c-black font-weight-bold f-s-26 pb-4 text-center">Хот-доги</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Стандартный</span><span class="c-orange f-s-17 position-relative ml-auto">60 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Датский</span><span class="c-orange f-s-17 position-relative ml-auto">90 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Французский</span><span class="c-orange f-s-17 position-relative ml-auto">80 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Чили</span><span class="c-orange f-s-17 position-relative ml-auto">90 ₽</span></div></div</div>').hide().show('slow');
		break;
		case 2:
			menu_burger.append('<div class="row z-ind-1 font-weight-bold"><div class="col-3 d-flex flex-column px-4"><span class="c-black f-s-26 pb-4 text-center">Картофель фри</span><div class="d-flex flex-row pt-2 mt-auto"><span class="c-black f-s-17 txt-menu position-relative">Мини</span><span class="c-orange f-s-17 position-relative ml-auto">40 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Стандарт</span><span class="c-orange f-s-17 position-relative ml-auto">55 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Большой</span><span class="c-orange f-s-17 position-relative ml-auto">80 ₽</span></div></div><div class="col-3 d-flex flex-column font-weight-bold border-left border-right px-4"><span class="c-black f-s-26 pb-4 text-center">Наггетсы</span><div class="d-flex flex-row pt-2 mt-auto"><span class="c-black f-s-17 txt-menu position-relative">3 шт</span><span class="c-orange f-s-17 position-relative ml-auto">60 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">6 шт</span><span class="c-orange f-s-17 position-relative ml-auto">100 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">9 шт</span><span class="c-orange f-s-17 position-relative ml-auto">150 ₽</span></div></div><div class="col-3 d-flex flex-column border-right px-4"><span class="c-black font-weight-bold f-s-26 pb-4 text-center">Острые куриные крылья</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">2 шт</span><span class="c-orange f-s-17 position-relative ml-auto">70 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">4 шт</span><span class="c-orange f-s-17 position-relative ml-auto">130 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">6 шт</span><span class="c-orange f-s-17 position-relative ml-auto">175 ₽</span></div></div><div class="col-3 d-flex flex-column px-4"><span class="c-black font-weight-bold f-s-26 pb-4 text-center">Попкорн из мяса и цыпленка</span><div class="d-flex flex-row pt-2 mt-auto"><span class="c-black f-s-17 txt-menu position-relative">Мини</span><span class="c-orange f-s-17 position-relative ml-auto">70 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Стандарт</span><span class="c-orange f-s-17 position-relative ml-auto">120 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Большой</span><span class="c-orange f-s-17 position-relative ml-auto">170 ₽</span></div></div><div class="col-3 d-flex flex-column px-4 pt-4 border-right"><span class="c-black font-weight-bold f-s-26 pb-4 text-center">Картофель по-деревенски</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Мини</span><span class="c-orange f-s-17 position-relative ml-auto">70 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Большой</span><span class="c-orange f-s-17 position-relative ml-auto">90 ₽</span></div></div><div class="col-3 d-flex flex-column px-4 pt-4"><span class="c-black font-weight-bold f-s-26 pb-4 text-center">Добавки</span><div class="d-flex flex-row pt-2 mt-auto"><span class="c-black f-s-17 txt-menu position-relative">Лук фри</span><span class="c-orange f-s-17 position-relative ml-auto">15 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Ломтик сыра чеддер</span><span class="c-orange f-s-17 position-relative ml-auto">15 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Перец халапеньо</span><span class="c-orange f-s-17 position-relative ml-auto">15 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Соус Heinz на выбор</span><span class="c-orange f-s-17 position-relative ml-auto">20 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Бекон</span><span class="c-orange f-s-17 position-relative ml-auto">20 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Сироп для кофе</span><span class="c-orange f-s-17 position-relative ml-auto">20 ₽</span></div></div></div>').hide().show('slow');
		break;
		case 3:
			menu_burger.append('<div class="row z-ind-1 font-weight-bold"><div class="col-3 d-flex flex-column px-4"><span class="c-black f-s-26 pb-4 text-center">Сок</span><div class="d-flex flex-row mt-5"><span class="c-black f-s-17 txt-menu position-relative">0,2л</span><span class="c-orange f-s-17 position-relative ml-auto">45 ₽</span></div><span class="c-black f-s-26 pb-3 pt-4 text-center">Молочный коктейль</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">0,3л</span><span class="c-orange f-s-17 position-relative ml-auto">65 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">0,5л</span><span class="c-orange f-s-17 position-relative ml-auto">110 ₽</span></div></div><div class="col-3 d-flex flex-column font-weight-bold border-left border-right px-4"><span class="c-black f-s-26 pb-4 text-center">Горячие напитки 0,2л:</span><div class="d-flex flex-row pt-2 mt-auto"><span class="c-black f-s-17 txt-menu position-relative">чай черный</span><span class="c-orange f-s-17 position-relative ml-auto">40 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">чай зеленый</span><span class="c-orange f-s-17 position-relative ml-auto">40 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">кофе эспрессо</span><span class="c-orange f-s-17 position-relative ml-auto">50 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">кофе американо</span><span class="c-orange f-s-17 position-relative ml-auto">60 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">кофе американо</span><span class="c-orange f-s-17 position-relative ml-auto">70 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">кофе латте</span><span class="c-orange f-s-17 position-relative ml-auto">80 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">кофе гляссе</span><span class="c-orange f-s-17 position-relative ml-auto">90 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">держатель для чая/кофе</span><span class="c-orange f-s-17 position-relative ml-auto">5 ₽</span></div></div><div class="col-3 d-flex flex-column font-weight-bold border-left border-right px-4"><span class="c-black f-s-26 pb-4 text-center">Coca-cola, Fanta, Sprite:</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">0,3л</span><span class="c-orange f-s-17 position-relative ml-auto">50 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">0,5л</span><span class="c-orange f-s-17 position-relative ml-auto">80 ₽</span></div><span class="c-black f-s-26 pb-3 pt-4 text-center">Мин. вода BonAqua</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">0,5л</span><span class="c-orange f-s-17 position-relative ml-auto">50 ₽</span></div></div><div class="col-3 d-flex flex-column px-4"><span class="c-black font-weight-bold f-s-26 pb-4 text-center">Пиво разливное:</span><div class="d-flex flex-row pt-5"><span class="c-black f-s-17 txt-menu position-relative">светлое 0,5 л</span><span class="c-orange f-s-17 position-relative ml-auto">95 ₽</span></div></div><div class="col-3 d-flex flex-column px-4 pt-4 border-right"><span class="c-black font-weight-bold f-s-26 pb-4 text-center">Десерты:</span><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Пирожок с фруктовой начинкой</span><span class="c-orange f-s-17 position-relative ml-auto">50 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Пончик Донатс</span><span class="c-orange f-s-17 position-relative ml-auto">60 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Мороженое в рожке</span><span class="c-orange f-s-17 position-relative ml-auto">30 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Тирамису</span><span class="c-orange f-s-17 position-relative ml-auto">110 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Молочный коктейль 0,3л / 0,5л</span><span class="c-orange f-s-17 position-relative ml-auto">65/120 ₽</span></div></div></div>').hide().show('slow');
		break;
		case 4:
			menu_burger.append('<div class="row z-ind-1 font-weight-bold"><div class="col-4 d-flex flex-column px-4"><span class="c-black f-s-26 pb-4 text-center">Детский набор</span><div class="d-flex flex-row mt-5"><span class="c-black f-s-17 txt-menu position-relative">Чизбургер / Хот-дог</span><span class="c-orange f-s-17 position-relative ml-auto">195 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Лимонад / Сок / Чай</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Картофель фри мини</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Игрушка и леденец</span></div></div><div class="col-4 d-flex flex-column font-weight-bold border-left border-right px-4"><span class="c-black f-s-26 pb-4 text-center">Комбо-набор 1</span><div class="d-flex flex-row mt-5"><span class="c-black f-s-17 txt-menu position-relative w-75">Нагетсы 3шт / Чизбургер / Хот-дог стандарт</span><span class="c-orange f-s-17 position-relative ml-auto">75 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Картофель фри мини</span></div></div><div class="col-4 d-flex flex-column font-weight-bold border-left border-right px-4"><span class="c-black f-s-26 pb-4 text-center">Комбо-набор 2</span><div class="d-flex flex-row mt-5"><span class="c-black f-s-17 txt-menu position-relative w-75">Стандарт бургер / Хот-дог Датский/ Чили-дог</span><span class="c-orange f-s-17 position-relative ml-auto">145 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Картофель фри мини</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Кола 0.3 / Фанта 0.3 / Спрайт 0.3 / Лимонад 0.5 / Американо</span></div></div><div class="col-4 d-flex flex-column font-weight-bold border-left border-right px-4"><span class="c-black f-s-26 pb-3 pt-4 text-center">Комбо-набор 3</span><div class="d-flex flex-row mt-5"><span class="c-black f-s-17 txt-menu position-relative w-75">Нагетсы 4шт / Крылья острые 2шт</span><span class="c-orange f-s-17 position-relative ml-auto">145 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Картофель фри стандарт</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative w-75">Кола 0.3 / Фанта 0.3 / Спрайт 0.3 / Лимонад 0.5 / Американо</span></div></div><div class="col-4 d-flex flex-column font-weight-bold border-left border-right px-4"><span class="c-black f-s-26 pb-3 pt-4 text-center">Комбо-набор 4</span><div class="d-flex flex-row mt-5"><span class="c-black f-s-17 txt-menu position-relative w-75">Хаус бургер / Хаус ролл / Кантри ролл</span><span class="c-orange f-s-17 position-relative ml-auto">195 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Картофель фри стандарт</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Кола 0.3 / Фанта 0.3 / Спрайт 0.3 / Лимонад 0.5 / Американо</span></div></div><div class="col-4 d-flex flex-column font-weight-bold border-left border-right px-4"><span class="c-black f-s-26 pb-3 pt-4 text-center">Комбо-набор 5</span><div class="d-flex flex-row mt-5"><span class="c-black f-s-17 txt-menu position-relative">Большой фреш бургер</span><span class="c-orange f-s-17 position-relative ml-auto">195 ₽</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative"> Нагетсы 4шт / Крылья острые 2штКартофель фри стандарт</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Картофель фри стандарт</span></div><div class="d-flex flex-row pt-2"><span class="c-black f-s-17 txt-menu position-relative">Кола 0.3 / Фанта 0.3 / Спрайт 0.3 / Лимонад 0.5 / Американо</span></div></div></div>').hide().show('slow');
		break;
		default:
			break;
	}
});