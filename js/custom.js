$(document).ready(function() {
  $(".menu_btn").click(function() {
    $("body").toggleClass("addPnnl");
    $(".overlay").click(function() {
        $("body").removeClass("addPnnl");
    })
  });
//   $('.dd_box a').on('click',function(event){
//     var $anchor = $(this);
//     $('html, body').animate({
//       scrollTop: $($anchor.attr('href')).offset().top + "px"
//     }, 1000);
//     event.preventDefault();
//  });

  if ($(window).width() < 992) {
    $(".d_down > a").click(function(){
      $('.dd_box').slideUp();
      $(".d_down > a").removeClass("up");
      if ($(this).parent(".d_down").find(".dd_box").css('display') == 'none') {
          $(this).parent(".d_down").find(".dd_box").slideDown();
          $(this).addClass("up");
      }else{
        $(this).parent(".d_down").find(".dd_box").slideUp();
        $(this).removeClass("up");
      }
    });
    $(".sub_menu > a").click(function(){
      $('.dd_menu').slideUp();
          $(".sub_menu > a").removeClass("up");
          if ($(this).parent(".sub_menu").find(".dd_menu").css('display') == 'none') {
              $(this).parent(".sub_menu").find(".dd_menu").slideDown();
              $(this).addClass("up");
          }else{
              $(this).parent(".sub_menu").find(".dd_menu").slideUp();
              $(this).removeClass("up");
          }
      });
    // $(".hdr_menu ul li a").click(function(){
    //   $('.hdr_menu ul li .dd_box').slideUp();
    //   $(this).removeClass("up");
    //   if ($(this).parent(".hdr_menu ul li").find(".dd_box").css('display') == 'none') {
    //       $(this).parent(".hdr_menu ul li").find(".dd_box").slideDown();
    //       $(this).addClass("up");
    //   }else{
    //     $(this).parent(".hdr_menu ul li").find(".dd_box").slideUp();
    //     $(this).removeClass("up");
    //   }
    // });
    // $(".d_down > a").click(function(){
    //   $('.d_down .dd_box').slideUp();
    //   $(this).removeClass("up");
    //   if ($(this).parent(".d_down").find(".dd_box").css('display') == 'none') {
    //       $(this).parent(".d_down").find(".dd_box").slideDown();
    //       $(this).addClass("up");
    //   }else{
    //     $(this).parent(".d_down").find(".dd_box").slideUp();
    //     $(this).removeClass("up");
    //   }
    // });
    // $(".sub_menu a").click(function(){
    //   $('.sub_menu .dd_menu').slideUp();
    //       $(".sub_menu a").removeClass("ss");
    //       if ($(this).parent(".sub_menu").find(".dd_menu").css('display') == 'none') {
    //           $(this).parent(".sub_menu").find(".dd_menu").slideDown();
    //           $(this).addClass("ss");
    //       }else{
    //           $(this).parent(".sub_menu").find(".dd_menu").slideUp();
    //           $(this).removeClass("ss");
    //       }
    //   })
  }

  $('.brand_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed:1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },

      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});




  

