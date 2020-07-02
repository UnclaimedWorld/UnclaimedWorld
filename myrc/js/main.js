$(document).ready(function(){
	$('.horizontal-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<button class="horizontal-slider__button horizontal-slider__button--left"><img src="img/icons/left-arrow.svg" alt="prev-arrow"></button>',
		nextArrow: '<button class="horizontal-slider__button horizontal-slider__button--right"><img src="img/icons/right-arrow.svg" alt="next-arrow"></button>',
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
			    slidesToShow: 3,
			    slidesToScroll: 3,
			    infinite: true,
			  }
			},
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 2,
		      slidesToScroll: 2,
		      infinite: true,
		    }
		  },
		  {
		    breakpoint: 576,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      infinite: true,
		    }
		  }
		]
	});
	$('.header__menu').on('click', function(){
		$('.header__wrap').addClass('header__wrap--active');
		$('.mobile-overlay').addClass('active');
		$('body').addClass('ovh');
	});
	$('.mobile-overlay').on('click', function(){
		$('.header__wrap').removeClass('header__wrap--active');
		$('.mobile-overlay').removeClass('active');
		$('body').removeClass('ovh');
	});
	// var counter = 0;
	// var exit = false;
	// var caseArray;
	// while(counter != ($('.case .case__item').length - 1){
	// 	caseArray[counter] =
	// };
	// while(!exit){
	// 	var caseArray = $('.case .case__item')
	// 	var case = $('.case .case__item')[counter];
	// 	case.css('background-color', 'black');
	// 	counter++;
	// 	if(counter == 3)
	// 		exit = true;
	// };
	$('.n_1').click(function(){$('html, body').animate({scrollTop:0}, 500);return false;});
	$('.n_2').click(function(){$('html, body').animate({scrollTop:$('#second-block').offset().top}, 500);return false;});
	$('.n_3').click(function(){$('html, body').animate({scrollTop:$('#third-block').offset().top}, 500);return false;});
	$('.n_4').click(function(){$('html, body').animate({scrollTop:$('#fourth-block').offset().top}, 500);return false;});
	$('.n_5').click(function(){$('html, body').animate({scrollTop:$('#fifth-block').offset().top}, 500);return false;});
	$('.n_6').click(function(){$('html, body').animate({scrollTop:$('#sixth-block').offset().top}, 500);return false;});
	$('.n_7').click(function(){$('html, body').animate({scrollTop:$('#seventh-block').offset().top}, 500);return false;});
	$('.n_8').click(function(){$('html, body').animate({scrollTop:$('#eighth-block').offset().top}, 500);return false;});
	$('.header__search').on('click', function(){
		$('.search__popup').removeClass('hidden');
		$('body').css('overflow', 'hidden');
	});
	
	// $('.search__popup').on('click', function(e){
	// 	if(e.target == $('.search__popup')) {
	// 		$('.search__popup').addClass('hidden');
	// 		$('body').css('overflow', '');
	// 	}
	// });
	
	var popup = $('.search__popup');
	popup.on('click', function(e){
		if(e.target === this.firstElementChild || e.target === this.firstElementChild.firstElementChild || e.target === this) {
			console.log('test');
			popup.addClass('hidden');
		}
	})
	$('.check').on('click', function(e){
		e.preventDefault();
		$('.switch').toggleClass('switch--active');
	})
popup.onclick = function(event) {
	if(event.target === this.firstElementChild) {
		console.log('test');
		popup.addClass('hidden');
	}
};
});

var popup = document.getElementsByClassName('search__popup')[0];