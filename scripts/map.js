function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map-div'), {
        center: {lat: 27.865, lng: -82.459},
        mapTypeControl: false,
        zoom: 9
    });
}
