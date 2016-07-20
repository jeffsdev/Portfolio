$( document ).ready(function() {

  // Fix for funky fixed background 100%vh viewport size re-sizing jumpy bug on mobile browsers
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var h = $('.height-fix').height();
    $('.height-fix').height(h);
  }


  // scroll and display effects

  var sections = $('section');
  var nav = $('.main-nav');
  var nav_height = nav.outerHeight();

  $(document).scroll(function(){
    var st = $(this).scrollTop();
    var navHeight = 50;
    var cur_pos = $(this).scrollTop();

    // change active classes
    $('section').each(function(index, element) {
  		if(st + navHeight > $(this).offset().top && st + navHeight  <= $(this).offset().top + $(this).height()  ){
        var id = $(this).attr('id');

        sections.removeClass('active');
        $('a[href="#'+id+'"]').addClass('active');

      } else {
        var id = $(this).attr('id');

        sections.removeClass('active');
        $('a[href="#'+id+'"]').removeClass('active');
  		}
  	});

    // add active class to contact if at bottom of page
    if(cur_pos === ( $(document).height() - window.innerHeight )){
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      nav.find('a[href="#contact"]').addClass('active');
    }

    // fade in portfolio items when scrolling over them
    $('.scroll-fadein').each( function(i){
      var bottom_of_item = $(this).offset().top + $(this).outerHeight() -100;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

    // initiate fade-in
      if( bottom_of_window > bottom_of_item ){
        $(this).animate({'opacity':'1'},500);
      }
    });

    // add backgroudn to nav once it hits portfolio section
    if (cur_pos > window.innerHeight -50) {
      $("nav").css("background", "rgba(0, 0, 0, 0.9)");
    } else {
      $("nav").css("background", "none");
    }

  });

  // scroll to location when clicking nav button
  nav.find('a').on('click', function () {
    var $el = $(this);
      var id = $el.attr('href');

      $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height +1
      }, 500);

      return false;
  });

  // scroll to portfolio section when clicking animated arrow in header
  $(".loader").on('click', function () {
    var $el = $(this);
      var id = $el.attr('href');

      $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height +1
      }, 1500);

      return false;
  });

  // scroll to top of page when clicking logo button
  $('a[href="#top"]').click(function() {
    var $el = $(this);
    var id = $el.attr('href');

    nav.find('a').removeClass('active');
    sections.removeClass('active');
    $el.addClass("active");

    $('html, body').animate({
      scrollTop: $(id).offset().top -500});

    return false;
  });


});
