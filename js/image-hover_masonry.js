jQuery(document).ready(function(){					
 
	 jQuery('.element').bind('mouseover', function() {
//        jQuery(this).addClass('active');
        jQuery(this).find('img').stop().each(function() {
          jQuery(this).animate({
            'opacity': 1
          }, 200);
      	});
     });
	 
	  jQuery('.element').bind('mouseout', function() {
//        jQuery(this).removeClass('active');
       jQuery(this).find('img').stop().each(function() {
          jQuery(this).animate({
            //sumit.chourasia opacity
            //'opacity': 0.4
            'opacity':0.8
          }, 200);
      	});
     });
	  

      jQuery('.element').bind('mouseenter', function() {
        jQuery(this).find('.title').stop().each(function() {
          jQuery(this).animate({
			 'opacity': 1
          }, 200);
      	});
        jQuery(this).find('.subtitle').stop().each(function() {
		  jQuery(this).delay(150).animate({
			 'opacity': 1
          }, 200);
        });
      });

      jQuery('.element').bind('mouseleave', function() {
        jQuery(this).find('.title').stop().each(function() {
          jQuery(this).animate({
            'opacity': 0
          }, 200);
      	});

//      	sumit.chourasia
//        jQuery(this).find('.subtitle').stop().each(function() {
//          jQuery(this).animate({
//            'opacity': 0
//          }, 200);
//        });
//      });

    
});