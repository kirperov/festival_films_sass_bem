// Initialize and add the map
function initMapFilm() {
    // The location of Marseille
    var place = {
        lat: 43.2965,
        lng: 5.3698
    };
    // The map, centered at Marseille
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: place});
    // The marker, positioned at Marseille
    var marker = new google.maps.Marker({position: place, map: map});
}

// Initialize and add the map
function initMapContact() {
    // The location of Marseille
    var place = {
        lat: 43.2965,
        lng: 5.3698
    };
    // The map, centered at Marseille
    var map = new google.maps.Map(
        document.getElementById('map-contact'), {zoom: 16, center: place});
    // The marker, positioned at Marseille
    var marker = new google.maps.Marker({position: place, map: map});
}