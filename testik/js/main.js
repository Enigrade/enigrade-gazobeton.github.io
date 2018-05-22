$(document).ready(function(){

  setTimeout(function() {
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
  }, 900);

  $(window).on('load', function(){
    setTimeout(function () { 
      $(".loader").delay(100).fadeOut().remove();   
      $('body').removeClass('load');
    }, 1200);
    
    $(".works-item").each(function(){
      $(this).addClass('wow zoomIn')
    })

    $(".works-item:nth-child(even)").each(function(){
      $(this).attr("data-wow-delay", "0.25s");
    })

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
   infinite: true
 });

  // $(window).scroll(function () {
  //   var s_top = $(document).scrollTop();
  //   var yes = $(".about.effect .about__desc").offset().top + 100;
  //   if (s_top > yes) {
  //       $('.mob-fix-btn').css('bottom', '0');
  //     }
  //   });

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