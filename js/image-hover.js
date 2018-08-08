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
            'opacity': 0.8
          }, 200);
      	});
     });
	  

      jQuery('.element').bind('mouseenter', function() {
        jQuery(this).find('.title').stop().each(function() {
          jQuery(this).animate({
            'margin-left': 35,
			 'opacity': 1
          }, 250);
      	});
        jQuery(this).find('.subtitle').stop().each(function() {
		  jQuery(this).animate({
			 'opacity': 1
          }, 0);
		  jQuery(this).delay(150).animate({
		    //sumit.chourasia changed margin-left from 35 to 5
            'margin-left': 5
          }, 250);
        });
      });

      jQuery('.element').bind('mouseleave', function() {
        jQuery(this).find('.title').stop().each(function() {
          jQuery(this).animate({
            'opacity': 0,
			 'margin-left': -500
          }, 400);
      	});
        jQuery(this).find('.subtitle').stop().each(function() {
          jQuery(this).animate({
            //sumit.chourasia to be reverted
            //'opacity': 0,
			// 'margin-left': 600
			'opacity': 1,
			 'margin-left': 10
          }, 400);
        });
      });


    
});