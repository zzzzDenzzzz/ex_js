$(function(){
  let all_panels = $('.templatemo-accordion > li > ul').hide();

  $('.templatemo-accordion > li > a').on('click',function(){
    let target =  $(this).next();

    if(!target.hasClass('active')){
      all_panels.removeClass('active').slideUp();
      target.addClass('active').slideDown();
    }

    return false;
  });

  $('.product-links-wap a').on('click',function(){
    let this_src = $(this).children('img').attr('src');

    if (this_src){
      $('#product-detail').attr('src', this_src);
    }
      
    return false;
  });

  $('#btn-minus').on('click',function(){
    let val = $("#var-value").html();
      
    val = (val > 1) ? val - 1 : val;

    $("#var-value").html(val);
    $("#product-quanity").val(val);

    return false;
  });

  $('#btn-plus').on('click',function(){
    let val = $("#var-value").html();

    val++;

    $("#var-value").html(val);
    $("#product-quanity").val(val);

    return false;
  });

  $('.btn-size').on('click',function(){
    let this_val = $(this).html();

    if (this_val){
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary').addClass('btn-success');
      $(this).removeClass('btn-success').addClass('btn-secondary');
    }

    return false;
  });

  $('#carousel-related-product').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    responsive: [{
        breakpoint: 1024,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 3
        }
      }
    ]
  });
});
