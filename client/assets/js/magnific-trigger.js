        /* ====================================================================== */
        /*  Magnific-Popup
        /* ====================================================================== */

        $(document).ready(function() {    
          $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',
            
            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,
            
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in',
            focus: '#search'
          });
        });

          var latlng = new google.maps.LatLng(0, 0);
          var myOptions = {
            zoom: 14,
            center: latlng,
            scrollwheel: false,
            scaleControl: false,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map2 = new google.maps.Map(document.getElementById("map-canvas"),
            myOptions);

          var geocoder_map2 = new google.maps.Geocoder();
          var address = 'Portsmouth,United+Kingdom';
          geocoder_map2.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              map2.setCenter(results[0].geometry.location);
              
              var marker = new google.maps.Marker({
                map: map2, 
                
                position: map2.getCenter()
              });
              
              var contentString = 'Portsmouth,United+Kingdom';
              var infowindow = new google.maps.InfoWindow({
                content: contentString
              });
              
              
              
            } else {
              alert("Geocode was not successful for the following reason: " + status);
            }
          });        