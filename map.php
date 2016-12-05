<!DOCTYPE html>
<html>
  <head>
    <!-- This stylesheet contains specific styles for displaying the map
         on this page. Replace it with your own styles as described in the
         documentation:
         https://developers.google.com/maps/documentation/javascript/tutorial -->
    <link rel="stylesheet" href="">
  </head>
  <body>
    <div id="map"></div>
    
    <script>
        function cargarmap1() {
        map1.style.height='300px';
        var mapOptions = {
        center: new google.maps.LatLng(25.80, -80.30),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP};
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);}    
    </script>   

    <script>window.onload = cargarmap1;</script>
    <!--<script>
        function loadScript() 
        {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyB_qzM495X9ykm3iU_IM0fL9kRQU6PBujg" +
                         "&sensor=false&region=ES&callback=initMap";
            document.body.appendChild(script);
        }
        function initMap() 
        {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'),
                                      {
                                        center: {lat: -34.397, lng: 150.644},
                                        scrollwheel: false,
                                        zoom: 8
                                      });
        }
        window.onload = loadScript;

    </script>-->
    
    <!--MI API_KEY = AIzaSyB_qzM495X9ykm3iU_IM0fL9kRQU6PBujg-->
    <!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_qzM495X9ykm3iU_IM0fL9kRQU6PBujg&callback=initMap"
    async defer></script>-->
  </body>
</html>