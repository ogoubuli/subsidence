
// Calling methods with javascript libraries
// 
// Mapbox GL JS   mapboxgl.METHOD
// Leaflet      L.METHOD
// jQuery     jQuery.METHOD  or $('selector').METHOD
// d3       d3.METHOD


mapboxgl.accessToken = 'pk.eyJ1IjoiZXN0aGVyeWFuZyIsImEiOiJhc0lwRTNzIn0.uPn26JQFF7K_8VTund-7Xw';  // replace with your own access token

//add an image to the map
var mapStyle = {
    "version": 8,
    "name": "Dark",
    "sources": {
        "mapbox": {
            "type": "vector",
            "url": "mapbox://styles/estheryang/cj70ubz3k03zu2ro6ub2y0n9z"
        },
        "overlay": {
            "type": "image",
            "url": "http://labs.cas.usf.edu/geodesy/images/subsidence_hr.jpg",
            "coordinates": [
                [-99.158,19.422],
                [-99.158,19.422],
                [-99.158,19.422],
                [-99.158,19.422]
            ]
        }
    },
    "sprite": "mapbox://sprites/mapbox/dark-v9",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
        }
    ]
};

// Link to a mapbox studio style
var map = new mapboxgl.Map({
        container: 'map',
        minZoom: 10,
       maxZoom: 17,
  style: 'mapbox://styles/estheryang/cj70ubz3k03zu2ro6ub2y0n9z' 
});

//change opacity; my image need to be added
var slider = document.getElementById('slider');
var sliderValue = document.getElementById('slider-value');

map.on('load', function() {
    map.loadImage("http://labs.cas.usf.edu/geodesy/images/subsidence_hr.jpg")
    map.addLayer({
        "id": "overlay",
        "source": {
            "type": "raster",
            "url": "mapbox://mapbox.u8yyzaor"
        },
        "type": "raster"
    });

    slider.addEventListener('input', function(e) {
        // Adjust the layers opacity. layer here is arbitrary - this could
        // be another layer name found in your style or a custom layer
        // added on the fly using `addSource`.
        map.setPaintProperty('chicago', 'raster-opacity', parseInt(e.target.value, 10) / 100);

        // Value indicator
        sliderValue.textContent = e.target.value + '%';
    });
});

// Show "About this Map" modal when clicking on button
$('#about').on('click', function() {

  $('#screen').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)

  $('.modal').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)                          
  
});

