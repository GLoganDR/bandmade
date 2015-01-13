(function(jQuery) {
    "use strict";
    

    var check = true;

    jQuery.fn.ccTheme = function(options) {
        var that = this;
        return this.each(function() {
            init(jQuery(this) );
        } );  
        function Accordion() {
            jQuery("ul.coca-accordion li").each(function(){
                if(jQuery(this).index() > 0){
                    jQuery(this).children(".accordion-content").css('display','none');
                }else{
                    jQuery(this).find(".accordion-title").addClass('active');
                }
                
                        
                jQuery(this).children(".accordion-title").bind("click", function(){
                    jQuery(this).addClass(function(){
                        if(jQuery(this).hasClass("active")) return "";
                        return "active";
                    });
                    jQuery(this).siblings(".accordion-content").slideDown();
                    jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
                    jQuery(this).parent().siblings("li").find(".active").removeClass("active");
                });
            });
        }     
        function Tabs() {
            jQuery('#myTab a').click(function (e) {
                e.preventDefault()
                $(this).tab('show')
            })
        }
        function LayerSlider() {
          if ($('#layerslider').length && jQuery()) {
            $('#layerslider').layerSlider({
                width: '100%',
                height: '600px',
                responsive: true,
                responsiveUnder: 940,
                sublayerContainer: 940,
                autoStart: true,
                pauseOnHover: true,
                firstLayer: 1,
                animateFirstLayer: true,
                randomSlideshow: false,
                twoWaySlideshow: true,
                loops: 0,
                forceLoopNum: true,
                autoPlayVideos: false,
                autoPauseSlideshow: 'auto',
                keybNav: true,
                touchNav: true,
                navButtons: true,
                navStartStop: false,
                skin: 'fullwidth',
                skinsPath:'assets/ls_skins/',
            });
          }
        }

        function Countfunfact() {
            jQuery(function ($) {
              // start all the timers
              $('.timer').each(count);
              function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
              }
            });
        }
        function Countprocess(){
            jQuery(document).ready(function(){
                function mixProgress(container) {
                    return container.each(function(){
                        var wrap = jQuery(this);
                        wrap.find('.progress').each(function(i) {
                            var element = jQuery(this);
                            //console.debug(element);
                            var w_att = element.find('.bar', wrap).attr('data-progress');
                            element.find('.bar', wrap).css('width', w_att + '%');
                            setTimeout(function(){ 
                                element.addClass('start_animation animation'+i);
                                jQuery('.animation'+i).find('.bar', wrap).countTo();
                            }, (i * 250));
                        });
                    });
                }
                var container = jQuery('.prog-wrap');
                mixProgress(container);
            });  
        }
        function Cocaanimated() {
            jQuery(document).ready(function() {     
                jQuery('.frr_fade, .powerskill').addClass("hidden").viewportChecker({
                    classToAdd: 'visible animated fadeIn', 
                    offset: 100,
                callbackFunction: function(elem){
                   Countfunfact();
                   Countprocess ();
                }
                });
             });
            jQuery(document).ready(function() {     
                jQuery('.section-title, .right-effect').addClass("hidden").viewportChecker({
                    classToAdd: 'visible animated bounceInLeft', 
                    offset: 100,
                });
            });
        jQuery(document).ready(function() {     
            jQuery('.section-intro, .left-effect').addClass("hidden").viewportChecker({
                classToAdd: 'visible animated bounceInRight', 
                offset: 100,
                });
            }); 
        jQuery(document).ready(function() {     
            jQuery('.top-intro').addClass("hidden").viewportChecker({
                    classToAdd: 'visible animated flipInX', 
                    offset: 100,
                });
            });
        }
        /*function carousel() {
            jQuery('.featuredprojects').carouFredSel({
            responsive: true,           
            prev: '#featuredprojects-prev',
            next: '#featuredprojects-next',
            auto: false,
            width: '100%',
            height: 'variable',
            scroll: 1,
            items: {
                width:380,
                visible: {
                    min: 1,
                    max: 3
                }
            }
            });
        }*/
        function Flexslider() {
            FS.pauseOnHover = (FS.pauseOnHover === 'true')? true: false;
            FS.pauseOnAction = (FS.pauseOnAction === 'true')? true: false;
            FS.controlNav = (FS.controlNav === 'true')? true: false;
            FS.directionNav = true;

            jQuery('.flexslider').each(function(){
                jQuery(this).flexslider( FS );
            });
        }
        /* ==========================================================================
   exists - Check if an element exists
   ========================================================================== */    
  
  function exists(e) {
    return $(e).length > 0;
  }

        function init($contex) {
            LayerSlider();
            Cocaanimated();
            Accordion();
            Tabs();
            Flexslider();
            if(typeof $.fn.superfish != 'undefined'){   
              jQuery('#menu').superfish({
                delay: 500,
                animation: {opacity:'show',height:'show'},
                speed: 100,
                cssArrows: true
              }); 
           }
        }
    } /* END Class */

})(jQuery);

jQuery(document).ready(function() {
    jQuery('body').ccTheme();
});
