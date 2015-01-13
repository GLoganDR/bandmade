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
   /* ==========================================================================
   handleMobileMenu 
   ========================================================================== */    

        function handleMobileMenu() {
          if ($(window).width() > 1299) {
            $("#mobile-menu").hide();
            $("#mobile-menu-trigger").removeClass("mobile-menu-opened").addClass("mobile-menu-closed");
          } else {  
            if (!exists("#mobile-menu")) {
              $("#menu").clone().attr({
                id: "mobile-menu",
                "class": "fixed container"
              }).insertAfter("#header");
              $("#mobile-menu > li > a, #mobile-menu > li > ul > li > a").each(function() {
                var $t = $(this);
                if ($t.next().hasClass('sub-menu') || $t.next().is('ul') || $t.next().is('.sf-mega')) {
                  $t.append('<span class="fa fa-caret-down mobile-menu-submenu-arrow mobile-menu-submenu-closed"></span>');

                }
              });
            $("#mobile-menu").append('');
              $(".sf-with-ul").click(function(event) {
                var $t = $(this).children();
                if ($t.hasClass("mobile-menu-submenu-closed")) {
                  $t.parent().siblings("ul").slideDown(300);
                  $t.parent().siblings(".sf-mega").slideDown(300);
                  $t.removeClass("mobile-menu-submenu-closed fa-caret-down").addClass("mobile-menu-submenu-opened fa-caret-up");
                } else {
                  $t.parent().siblings("ul").slideUp(300);
                  $t.parent().siblings(".sf-mega").slideUp(300);
                  $t.removeClass("mobile-menu-submenu-opened fa-caret-up").addClass("mobile-menu-submenu-closed fa-caret-down");
                }
                event.preventDefault();
              });
              
              $("#mobile-menu li, #mobile-menu li a, #mobile-menu ul").attr("style", "");
            }  
          }
        }
      /* ==========================================================================
         showHideMobileMenu
         ========================================================================== */
        function showHideMobileMenu() { 
          $("#mobile-menu-trigger").click(function(event) {
            var $t = $(this);
            var $n = $("#mobile-menu");
            if ($t.hasClass("mobile-menu-opened")) {
              $t.removeClass("mobile-menu-opened").addClass("mobile-menu-closed");
              $n.slideUp(300);
              $(".logo-outer a").show();
            } else {
              $t.removeClass("mobile-menu-closed").addClass("mobile-menu-opened");
              $n.slideDown(300);
              $(".logo-outer a").hide();
            }
            event.preventDefault(); 
          });
        }
        function init($contex) {
            LayerSlider();
            Cocaanimated();
            Accordion();
            Tabs();
            Flexslider();
            //carousel();
            handleMobileMenu();
            showHideMobileMenu();
            jQuery(window).resize(function() { 
                //carousel();   
            });
            if(typeof $.fn.superfish != 'undefined'){   
              jQuery('#menu').superfish({
                delay: 500,
                animation: {opacity:'show',height:'show'},
                speed: 100,
                cssArrows: true
              }); 
           }
           /* ==========================================================================
           When the window is resized, do
           ========================================================================== */
           
          jQuery(window).resize(function() {
            handleMobileMenu();
          });
        }
    } /* END Class */

})(jQuery);

jQuery(document).ready(function() {
    jQuery('body').ccTheme();
});


