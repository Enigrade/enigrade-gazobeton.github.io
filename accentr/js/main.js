$(document).ready(function(){
	
	// *********************************************************************
		var sending = false;
    	$('form').submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        if (sending) return false;
        var self = this;
        var h = $(this).serializeArray();
        var f = {};
        for (var i = 0; i< h.length; i++) f[h[i].name] = h[i].value;
        var sbmVal = $(this).find('[type=submit]').val();
        $(this).find('[type=submit]').val('Отправка');
        $.ajax({
            url:'/ajax.php',
            data:f,
            type:'POST',
            success:function(){
                $(self).find('[type=submit]').val(sbmVal);
                sending = false;
                $('.overlay').removeClass('active');
                $('.readyPop').toggleClass("active2");
                $('body').addClass("overfl");
            },
            error: function(){
                $(self).find('[type=submit]').val(sbmVal);
                sending = false;
                alert('Заявка отправлена');
            }
        })
        return false;
    });

// *********************************************************************

	$(".phone").mask("+7(999) 999-9999");

	$('#slider1').owlCarousel({
		items:1,
		singleItem : true,
		loop:true, //Зацикливаем слайдер
		margin:0, //Отступ от картино если выводите больше 1
		nav:false, //Отключил навигацию
		navigation:false,
		dots: true,
		pagination:true,
		autoplay:true, //Автозапуск слайдера
		smartSpeed: 1500,
		animateOut:'fadeOut',
		transitionStyle:'fade',
		slideSpeed : 3000,
    	paginationSpeed : 3000,
    	rewindSpeed : 3000,
    	smartSpeed: 3000,
		autoPlay:5000, 
		mouseDrag:false,
		lazyLoad:true,
		lazyFollow:true,
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$('#slider2').owlCarousel({
		items:1,
		singleItem : true,
		loop:true, //Зацикливаем слайдер
		margin:0, //Отступ от картино если выводите больше 1
		nav:false, //Отключил навигацию
		navigation:false,
		dots: true,
		pagination:true,
		autoplay:true, //Автозапуск слайдера
		smartSpeed: 1500,
		animateOut:'fadeOut',
		transitionStyle:'fade',
		slideSpeed : 3000,
    	paginationSpeed : 3000,
    	rewindSpeed : 3000,
    	smartSpeed: 3000,
		autoPlay:5000, 
		mouseDrag:false,
		lazyLoad:true,
		lazyFollow:true,
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$.ionTabs("#tabs_1");

	$('.popUp').click(function(e){
		e.stopPropagation();
		// e.preventDefault();
	});
	$('.pop_open').click(function(e){
		e.preventDefault();
		$('body').toggleClass("overfl");
		$('.overlay').toggleClass("active");
	})
	$('.popUp .close').click(function(e){
		e.preventDefault();
		$('body').removeClass("overfl");
		$('.overlay').removeClass("active");
	})
	$('.overlay').click(function(e){
		e.preventDefault();
		$('body').toggleClass("overfl");
		$('.overlay').toggleClass("active");
	})

	$('.pop_open_title').click(function(){
		var title = $(this).parent('.content').find('.hid_title').val();
		$('.popUp .strana').val(title);
	})

	$('.readyPop .popUp .close').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('body').removeClass("overfl");
		$('.readyPop').toggleClass("active2");
	})
	$('.readyPop').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('body').toggleClass("overfl");
		$('.readyPop').toggleClass("active2");
	})

	$("nav a").click(function(event){
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	(function() {
	  "use strict";
	  var toggles = document.querySelectorAll(".cmn-toggle-switch");

	  for (var i = toggles.length - 1; i >= 0; i--) {
	    var toggle = toggles[i];
	    toggleHandler(toggle);
	  };
	  function toggleHandler(toggle) {
	    toggle.addEventListener( "click", function(e) {
	      e.preventDefault();
	      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
	    });
	  }
	})();

	jQuery('.menu_show').click(function(){
		jQuery('.menu').toggleClass("active");
	})
	$('.menu_show').click(function(){
		$('nav.show_mob').toggleClass("active");
		$('body').toggleClass("overfli");
	})
	$('nav.show_mob a').click(function(){
		$('nav.show_mob').removeClass("active");
		$('body').removeClass("overfl");
		$('.cmn-toggle-switch').removeClass("active");
	})
})