$( document ).ready(function() {
  // Fix for funky fixed background 100%vh viewport size re-sizing jumpy bug on mobile browsers
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var h = $('.height-fix').height();
    $('.height-fix').height(h);
  }





  // scroll and display effects

  var sections = $('section')
    , nav = $('.navbar')
    , nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    var a_active = $('a[href="#about"]').hasClass("active");
    var c_active = $('a[href="#contact"]').hasClass("active");

    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        // $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');

        // hide ".header-box" when viewing bottom of page.
        if (a_active || c_active) {
          $(".header-box").css("display", "none");
          console.log("hi");
        } else {
          $(".header-box").css("display", "block");
        }
      }
    });
  });

  nav.find('a').on('click', function () {

    var $el = $(this)
      , id = $el.attr('href');

      $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height +1
      }, 500);

      return false;
  });


  $('a[href="#top"]').click(function() {
    var $el = $(this)
      , id = $el.attr('href');

    nav.find('a').removeClass('active');
    sections.removeClass('active');
    $el.addClass("active");

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
  })



});
