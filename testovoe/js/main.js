$(document).ready(function(){

  $('.tabs_head').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider',
    dots: false,
    infinite: true,
    focusOnSelect: true,
    fade: true,
    speed: 700,
    cssEase: 'linear'
  });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.tabs_head',
    dots: true,
    focusOnSelect: true,
    infinite: true,
    fade: true,
    speed: 700,
    cssEase: 'linear'
  });

  $('.advant-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    infinite: true,
    fade: true,
    speed: 700,
    cssEase: 'linear'
  });

  $('.header__consult-but').click(function(e){
    e.preventDefault();
    $('.overlay').stop().fadeToggle(100);
    $('header .popUp').stop().fadeToggle(300);
  })

  $('.overlay').click(function(){
    $('.popUp').stop().fadeOut(300);
    $('.overlay').stop().fadeOut(100);
  })

  $('.next-scr').click(function(e){
    e.preventDefault();
    var top = $('.scr2').offset().top;
    $('body,html').stop().animate({scrollTop: top}, 1200);
  })

  $("nav a").click(function(e){
    e.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
  });

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
      $('.popUp_overlay').removeClass('active');
      $('.readyPop').toggleClass("active");
      $('body').addClass("overfl");
    },
    error: function(){
      $(self).find('[type=submit]').val(sbmVal);
      sending = true;
      alert('Заявка отправлена');
    }
  })
  return false;
});

// *********************************************************************

})

wow = new WOW(
{
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       false,       // default
                      live:         true        // default
                      // duration:     false
                    }
                    )
wow.init();