$(document).ready(function(){
    $('#banner').owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
    })
  
  
    $('#testimonial_slider').owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
    })
  
    // offer
    $('#offers_sec').owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
    })
  
  
    // friend
    $('#friend').owlCarousel({
        items:3,
        loop:true,
        nav:false,
        dots:true,
        margin:30,
    })
 
    // scrolling
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

    //accordion
    $(function() {
        // (Optional) Active an item if it has the class "is-active"	
        $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
        
        $(".accordion > .accordion-item").click(function() {
            // Cancel the siblings
            $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
            // Toggle the item
            $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
        });
    });

    AOS.init();
  });

   // loader start
   $(document).ready(function(){
    setTimeout(function(){
        $('.preloader').fadeOut();
    },3000);
  })
  //loader end

// counter
$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
  });

  // scroll  top to 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});