
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
        {
            "id": "background",
            "type": "background",
            "paint": {"background-color": "#111"}
        },
        {
            "id": "water",
            "source": "mapbox",
            "source-layer": "water",
            "type": "fill",
            "paint": {"fill-color": "#2c2c2c"}
        },
        {
            "id": "boundaries",
            "source": "mapbox",
            "source-layer": "admin",
            "type": "line",
            "paint": {"line-color": "#797979", "line-dasharray": [2, 2, 6, 2]},
            "filter": ["all", ["==", "maritime", 0]]
        },
        {
            "id": "overlay",
            "source": "overlay",
            "type": "raster",
            "paint": {"raster-opacity": 0.85}
        },
        {
            "id": "cities",
            "source": "mapbox",
            "source-layer": "place_label",
            "type": "symbol",
            "layout": {
                "text-field": "{name_en}",
                "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                "text-size": {"stops": [[4, 9], [6, 12]]}
            },
            "paint": {
                "text-color": "#969696",
                "text-halo-width": 2,
                "text-halo-color": "rgba(0, 0, 0, 0.85)"
            }
        },
        {
            "id": "states",
            "source": "mapbox",
            "source-layer": "state_label",
            "type": "symbol",
            "layout": {
                "text-transform": "uppercase",
                "text-field": "{name_en}",
                "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                "text-letter-spacing": 0.15,
                "text-max-width": 7,
                "text-size": {"stops": [[4, 10], [6, 14]]}
            },
            "filter": [">=", "area", 80000],
            "paint": {
                "text-color": "#969696",
                "text-halo-width": 2,
                "text-halo-color": "rgba(0, 0, 0, 0.85)"
            }
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