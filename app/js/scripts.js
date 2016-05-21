// //--- jQuery for Smooth Scrolling to target links ---//
// $(document).ready(function() {
//   console.log("hi");
// 	$(".scroll").click(function(event){
//     event.preventDefault();
//   console.log("hiii");
// 		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
// 	});
// });

//--- jQuery for Smooth Scrolling to target links ---//
// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });


// Fix for funky fixed background 100%vh viewport size re-sizing jumpy bug on mobile browsers
$( document ).ready(function() {
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var h = $('.height-fix').height();
    $('.height-fix').height(h);
  }
});





//////////////////////////////////

// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable

// var headerbottom = $('#header').offset().top + $('#header').height();
//
// // on scroll,
// $(window).on('scroll',function(){
//
//     // we round here to reduce a little workload
//     stop = Math.round($(window).scrollTop());
//     if (stop > headerbottom) {
//         $('.navbar').addClass('tree');
//     } else {
//         $('.navbar').removeClass('tree');
//    }
//
// });



//////////////////////////////


// var didScroll = false;
//
// $(window).scroll(function() {
//     didScroll = true;
//     console.log(scroll);
// });
//
// setInterval(function() {
//     if ( didScroll ) {
//         didScroll = false;
//         var $el;
//
//         //Same that all the if else statements
//         switch (true) {
//             case (scroll >= 0 && scroll <= 800):
//                 $el = $("#header-a");
//                 break;
//             case (scroll >= 801 && scroll <= 1545):
//                 $el = $("#work-a");
//                 break;
//             case (scroll >= 2546 && scroll <= 2969):
//                 $el = $("#about-a");
//                 break;
//             case (scroll >= 2970):
//                 $el = $("#contact-a");
//                 break;
//             default: //scroll<=590
//                 $el = $("#header-a");
//         }
//
//         //Removing blue class from all links
//         $('.navbar a').removeClass('tree');
//
//         //Adding blue class to the matched element
//         $el.addClass('tree');
//         debugger;
//     }
// }, 50);



// function onScroll(event){
// 		var scrollPosition = $(document).scrollTop();
// 		$('.navbar a').each(function () {
// 			var currentLink = $(this);
// 			var refElement = $(currentLink.attr("href"));
// 			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
// 				$('.navbar a').removeClass("tree");
// 				currentLink.addClass("tree");
// 			}
// 			else{
// 				currentLink.removeClass("tree");
// 			}
// 		});
// 	}


$(document).ready(function() {



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
    scrollTop: $(id).offset().top - nav_height
  }, 500);

  return false;
});

})


$(document).ready(function() {
  if($('a[href="#top"]').hasClass("active")){
    $(".header-box").css("background", "none");
    console.log("hi");
  }
});
