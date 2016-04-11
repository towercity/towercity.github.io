'use strict';

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map-div'), {
        center: {lat: 27.865, lng: -82.459},
        mapTypeControl: false,
        zoom: 10
    });

    // Iterate through locationArray and add markers to the map
    locationArray.forEach(function(place) {
        var marker = new google.maps.Marker({
            position: {lat: place.lat, lng: place.lng},
            map: map,
            title: place.name,
            label: place.mapLabel
        });
    });
}
