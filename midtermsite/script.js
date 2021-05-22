// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > -1) {
        $('#main_header_sticky').addClass('sticky');
    } else {
        $('#main_header_sticky').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('#main_header_sticky').hasClass('open-nav')) {
        $('#main_header_sticky').removeClass('open-nav');
    } else {
        $('#main_header_sticky').addClass('open-nav');
    }
});

$('#main_header_sticky li a').click(function() {
    if ($('#main_header_sticky').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('#main_header_sticky').removeClass('open-nav');
    }
});

// navigation scroll
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 0;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

/* Scroll-to-Top Button */
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});
/* NAVIGATION ACTIVE STATE IN SECTION AREA*/
var sections = $('section'), nav = $('nav'), nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
