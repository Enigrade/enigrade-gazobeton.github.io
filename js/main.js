$(document).ready(function(){

  $('.header__logo.dop a').on('click', function (e) {
    e.preventDefault();
    history.back();
    setTimeout(function () {
      $(location).attr('href', e.currentTarget.attributes.href.value);
    }, 250);
  });

  window.onpageshow = function(event) {
    if (event.persisted) {
      setTimeout(function () {
        $(".loader").delay(100).fadeOut().remove();
        $('body').removeClass('load');
      }, 100);
    }
  };

  $(window).on('load', function(){
    setTimeout(function () {
      $('.main__photo').addClass('show');
    }, 4000);
    setTimeout(function () {
      $(".loader").delay(100).fadeOut().remove();
      $('body').removeClass('load');
    }, 100);

    $(".works-item").each(function(){
      $(this).addClass('wow zoomIn')
    })

    $(".works-item:nth-child(even)").each(function(){
      $(this).attr("data-wow-delay", "0.25s");
    })

    $('.main__canvas').circleProgress({
      value: 1,
      size: 1000,
      fill: {
        color: "#141621"
          // image: "./img/krug.jpg"
        },
        animation :{
          duration: 2800, easing: "circleProgressEasing"
        },
        thickness : "155"
      });

  });

  wow = new WOW(
  {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       10,          // default
                      mobile:       false,       // default
                      live:         true        // default
                      // duration:     false
                    }
                    )
  wow.init();

  $('.works.big').slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows: false,
   infinite: true,
   responsive: [
   {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      arrows: true
    }
  }
  ]
});

  $(window).scroll(function () {
    if ($(window).width() < 990) {
      var s_top = $(document).scrollTop();
    // var yes = $(".about.effect .about__desc").offset().top + 100;
    if ($(window).scrollTop() > 860) {
      $('.mob-fix-btn').css('bottom', '0');
    }
  }
});

  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  // ****************************** отправка формы ***************************************
  var sending = false;
  $('form').submit(function(e){
    var isReq = true;
    var ref = $(this).find("[required]");
    $(ref).each(function(){
      if ( $(this).val() == '' )
      {
        alert("Пожалуйста, заполните поля.");
              // $(this).focus();
              e.preventDefault();
              isReq = false;
              return false;
            }
          });
    if (!isReq){
        // alert(isReq);
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
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
          alert('Отправлено')
        },
        error: function(){
          $(self).find('[type=submit]').val(sbmVal);
          sending = false;
          alert('Ошибка отправки');
        }
      })
      return false;
    });

// *********************************************************************

})