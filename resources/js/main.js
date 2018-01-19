$(document).ready(function(){
  $('.slideShow').slick({

  autoplaySpeed: 3000,
  dots: true,
  arrows: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  adaptiveWidth: true,
  arrows: true
});
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 650, 'swing', function () {
        window.location.hash = target;
    });
});
});
