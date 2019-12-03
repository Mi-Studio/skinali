$(window).load(function () {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали', // Set a custom before label
    after_label: 'Со скинали' // Set a custom after label
  });
  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
  $('.menu-button').on('click', function () {
    $('.menu').toggleClass('menu_active');
  });

  /* Настройка select */
  $('.select_checked').on('click', function () {
    $('.select__dropdown').toggleClass('select__dropdown_open');
   });
   $('.select__option').on('click', function(){
    var value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select_checked').text(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
   });
   $("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top -120 + "px" });
    return false;
   });
   $('input[type="tel"]').mask("+7 (999) 999-99-99");
   /* Показывать карту, только когда докрутили до нее*/
   var reviews = $('.reviews');
   var reviewsTop = reviews.offset().top;
   $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      console.log('Докрутили');
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8937a8501e36665a6b75072268a427496e8419c2baf7d812470ad3d9153e9a48&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll')
    }
   });
});