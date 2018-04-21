(function ($) {
 "use strict";

/*---------------------
  venobox
--------------------- */
    var veno_box = $('.venobox');
    veno_box.venobox();
	

/*----------------------------
 isotope active
------------------------------ */
	// portfolio start
    $(window).on("load",function() {
        var $container = $('.portfolio-content');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.portfolio-menu li a').on("click", function() {
            $('.portfolio-menu li a.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    //portfolio end



})(jQuery); 