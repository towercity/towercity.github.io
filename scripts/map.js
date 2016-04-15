'use strict';

// Declare global map variable
var map = 0;

function initMap() {
    var mapDiv = document.getElementById('map-div');
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(mapDiv, {
        center: {lat: 27.865, lng: -82.459},
        mapTypeControl: false,
        zoom: 10,
        methods: {
            reenter: function(latLang) {
                map.setCenter(latLang);
            }
        }
    });

    // Waits till whole page is loaded to ensure vars from other files are available
    $(document).ready(function() {
        // Iterate through locationArray and add markers to the map
        locationArray.forEach(function(place) {
            var marker = new google.maps.Marker({
                position: {lat: place.lat, lng: place.lng},
                map: map,
                title: place.name,
                label: place.mapLabel
            });

            marker.addListener('click', function() {
                map.setZoom(13);
                map.panTo(marker.getPosition());
                my.vm.clickLocation(place);
            });
        });
    });

    google.maps.event.addDomListener(mapDiv, 'click', function() {
        //window.alert('Map was clicked!');
    });
};
