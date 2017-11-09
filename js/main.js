$(document).ready(function() {

  $(window).on('load', function(){
    $(".preloader").fadeOut(500);   
  });

  $('.popUp-city__list li a').on('click', function(e){
    e.preventDefault();
    $(this).closest('.popUp-city').find('form').find('input[type="text"]').val($(this).text());
    $('.popUp-city__input-text').trigger('change');
  })

  $('.popUp-city__input-text').on('keyup change blur', function(){
    $('.popUp-city__list li a').each(function(){
      var city = $(this).text();
      if ($('.popUp-city__input-text').val() == city) {
        $('.popUp-city__input-text').addClass('apply');
        $('.popUp-city__input-text').removeClass('denied');
        $('.popUp-city__input-submit').addClass('apply');
        return false;
      }
      else {
        $('.popUp-city__input-text').removeClass('apply');
        $('.popUp-city__input-text').addClass('denied');
        $('.popUp-city__input-submit').removeClass('apply');
      }
    })
  })

  $('.popUp-city__input-submit').on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('apply')) {
      $(this).closest('form').submit();
    }
  })

  $('.popUp-overlay').on('click', function(){
    $(this).fadeOut(300);
    $('.popUp-overlay .popUp').each(function(){
      $(this).fadeOut(300);
    })
    $('body').removeClass('overfl');
  })

  $('.popUp').on('click', function(e){
    e.stopPropagation();
  })

  $('.popUp').append('<a href="" class="popUp__close"></a>');

  $('.popUp__close').on('click', function(e){
    e.preventDefault();
    $('.popUp-overlay, .popUp').each(function(){
      $(this).fadeOut(300);
    })
    $('body').removeClass('overfl');
  })

  $('.popButton').on('click', function(e){
    e.preventDefault();
    target = $(this).attr('data-target');
    $('.popUp-overlay, .popUp[data-target=' + target + ']').fadeIn(300);
    $('body').addClass('overfl');
  })

  $(".popUp-city__list").mCustomScrollbar({
    theme:"dark-thin"
  });

  $('.menu > li').each(function(){
    if($(this).find('.drop-menu').length > 0) {
      $(this).addClass('have-menu');
      $(this).find('a').first().addClass('have-menu');
    }
  })
  
  var float_menu = 100;
  if ($(this).scrollTop() > float_menu && $(window).width() > 975) {$('.header--float').slideDown(300);}
  else {$('.header--float').slideUp(300);}
  $(window).scroll(function () {
    if ($(this).scrollTop() > float_menu && $(window).width() > 975) {$('.header--float').slideDown(300);}
    else {$('.header--float').slideUp(300);}
  });

  $('.fast-info__blocks-current-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.fast-info__blocks-pagination',
    dots: false,
    infinite: true,
    speed: 700,
    cssEase: 'linear'
  });

  $('.fast-info__blocks-pagination').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.fast-info__blocks-current-item',
    dots: false,
    centerMode: true,  
    focusOnSelect: true,
    centerPadding: '0',
    responsive: [
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.shares__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    infinite: true,
    speed: 700,
    cssEase: 'linear'
  });

  $('.advantages-slider__pagination').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.advantages-slider__content',
    dots: false,
    infinite: true,
    centerMode: true,  
    focusOnSelect: true,
    centerPadding: '0' ,
    responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    ]
  });

  $('.advantages-slider__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.advantages-slider__pagination',
    dots: false,
    focusOnSelect: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 700,
    cssEase: 'linear'
  });

  $('.product-slider--slider .product-slider__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    responsive: [
    {
      breakpoint: 892,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    ]
  });

  $('.calculator-type__images').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    ]
  });

  $('.page-catalog-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    ]
  });

  $('.services__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    fade: true,
    speed: 700,
    dots: true,
    cssEase: 'ease',
    autoplay: true,
    autoplaySpeed: 3500
  });

  $('.cart__photo-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.cart__photo-thumbs',
    dots: false,
    infinite: true,
    speed: 300,
    cssEase: 'linear'
  });

  $('.cart__photo-thumbs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.cart__photo-big',
    dots: false,
    arrows: false,
    centerMode: true,  
    focusOnSelect: true,
    centerPadding: '0',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.projects__advantages-items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  
  if ($(window).width() >= 1327) {
    $('.object__thumbs').slick({
      slidesPerRow: 2, 
      rows: 3, 
      slidesToScroll: 1,
      vertical: true,
      asNavFor: '.object__big-photo',
      dots: false,
      infinite: true,
      centerMode: true,  
      focusOnSelect: true,
      centerPadding: '0',
      arrows: false
    });
  }

  if ($(window).width() < 1327 ) {
    $('.object__thumbs').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.object__big-photo',
      dots: false,
      infinite: true,
      centerMode: true,  
      focusOnSelect: true,
      centerPadding: '0',
      arrows: false
    });
  }

  $(window).resize(function(){
    if ($(window).width() >= 1327) {
      $('.object__thumbs').slick('unslick');
      $('.object__thumbs').slick({
        slidesPerRow: 2, 
        rows: 3, 
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.object__big-photo',
        dots: false,
        infinite: true,
        centerMode: true,  
        focusOnSelect: true,
        centerPadding: '0',
        arrows: false
      });
    }

    if ($(window).width() < 1327 ) {
      $('.object__thumbs').slick('unslick');

      $('.object__thumbs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.object__big-photo',
        dots: false,
        infinite: true,
        centerMode: true,  
        focusOnSelect: true,
        centerPadding: '0',
        arrows: false
      });
    }
  })

  $('.object__big-photo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.object__thumbs',
    dots: false,
    focusOnSelect: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 300,
    cssEase: 'linear'
  });

  $.ionTabs("#tabs_1", {
    type: "none"                 
  });

  $.ionTabs("#tabs_2", {
    type: "none"                 
  });

  $('.ionTabs__tab').on('click', function(){
    $('.fast-info__blocks-current-item, .fast-info__blocks-pagination').trigger('ready');
  })

  $('.calculator__input--select').styler();

  $('.calculator__input-lab').each(function(){
    var pad = $(this).closest('label').find('input, select').val().length;
    var centr = ($(this).closest('label').width() * 35) / 100;
    $(this).css('left', (pad * 15) + 20);
    if($(this).closest('label').find('.calculator__input--height').length) {
      $(this).closest('label').find('.calculator__input-lab').css('left', (pad * 12) + centr);
    }
  })

  $('.calculator__input, .calculator option, calculator').on('change keydown keyup', function(){
    var pad = $(this).val().length;
    var gran = (($(this).closest('label').width()) - $(this).closest('label').find('.calculator__input-lab').width()) - 25;
    $(this).closest('label').find('.calculator__input-lab').css('left', (pad * 15) + 20);
    if ($(this).closest('label').find('.calculator__input-lab').position().left < gran) {
      $(this).closest('label').find('.calculator__input-lab').css('opacity', 1);
    }
    else {
      $(this).closest('label').find('.calculator__input-lab').css('opacity', 0);
    }
  })

  $('.calculator .jq-selectbox li').on('click', function() {
    var pad = $(this).closest('label').find('.jq-selectbox__select-text').html().length;
    $(this).closest('label').find('.calculator__input-lab').css('left', (pad * 15) + 20);
  })

  $('.calculator__input--height').on('change keydown keyup', function(){
    var pad = $(this).val().length;
    var centr = ($(this).closest('label').width() * 35) / 100;
    var gran = (($(this).closest('label').width()) - $(this).closest('label').find('.calculator__input-lab').width()) - (centr/2);
    $(this).closest('label').find('.calculator__input-lab').css('left', (pad * 12) + centr);
    if ($(this).closest('label').find('.calculator__input-lab').position().left < gran) {
      $(this).closest('label').find('.calculator__input-lab').css('opacity', 1);
    }
    else {
      $(this).closest('label').find('.calculator__input-lab').css('opacity', 0);
    }
  })

  var val_inp_heig = parseFloat($('.calculator__input--height').val());

  $('.calculator-edit-button--remove').on('click', function(e) {
    e.preventDefault();
    if ($('.calculator__input--height').val() != 0) {
      val_inp_heig = val_inp_heig - 0.5;
      $('.calculator__input--height').val(val_inp_heig);
      $('.calculator__input--height').trigger('change');
    }
  })

  $('.calculator-edit-button--add').on('click', function(e) {
    e.preventDefault();
    val_inp_heig = val_inp_heig + 0.5;
    $('.calculator__input--height').val(val_inp_heig);
    $('.calculator__input--height').trigger('change');
  })

  $('.calculator__input').on('change keydown keyup click',function(){
    if ($(this).val() > 0) {
      $(this).closest('label').addClass('apply');
      $(this).closest('label').removeClass('denied');
    }
    else {
      $(this).closest('label').removeClass('apply');
      $(this).closest('label').addClass('denied');
    }
  })

  $('.guide__video-select select').styler();

  $('.header--float__menu-button').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header--float .header__nav').stop().slideToggle(300);
  })

  $('.header--float .header__nav > li.have-menu').on('click', function(e) {
    if ($(window).width() < 975) {
      e.preventDefault();
      $(this).find('.drop-menu').stop(1,1).slideToggle(300);
    }
  })

  $('.page-nav__sort-input-block select').styler();

  $('.page-nav--advance input[type="radio"]').styler();

  $('.page-nav__search-radio-label').each(function() {
    if ($(this).find('input').is(':checked')) {
      $(this).closest('label').find('span').addClass('active');
    }
  })

  $('.page-nav__search-radio-label').click(function() {
    $('.page-nav__search-radio-label').each(function() {
      $(this).closest('label').find('span').removeClass('active');
    })
    if ($(this).find('input').is(':checked')) {
      $(this).closest('label').find('span').addClass('active');
    }
  })

  var val_inp_heig2 = parseFloat($('.cart__payment-count-cont input').val());

  $('.cart__payment-count-button--rem').on('click', function(e) {
    e.preventDefault();
    if ($('.cart__payment-count-cont input').val() > 0) {
      val_inp_heig2 = val_inp_heig2 - 1;
      $('.cart__payment-count-cont input').val(val_inp_heig2);
    }
  })

  $('.cart__payment-count-button--add').on('click', function(e) {
    e.preventDefault();
    val_inp_heig2 = val_inp_heig2 + 1;
    $('.cart__payment-count-cont input').val(val_inp_heig2);
  })

  $(".sidebar__article-desc").dotdotdot({
    ellipsis: "...",
    wrap: "word",
    fallbackToLetter: true,
    after: null,
    watch: false,
    height: 130,
    tolerance: 0,
    lastCharacter: {
      remove: [" ", ",", ";", ".", "!", "?"],
      noEllipsis: []
    }
  });

  $('.side-menu-mob').on('click', function() {
    $('.sidebar').stop(1,1).slideToggle(300);
  })

  $('.card__input-block input[type="radio"]').styler();

  $('.card__login-block input[type="checkbox"]').styler();

  $('.card__form-block--delivery .card__input-block').on('click', function(){
    $(this).find('input[type="text"]').focus();
  })

});