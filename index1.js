
// Calling methods with javascript libraries
// 
// Mapbox GL JS   mapboxgl.METHOD
// Leaflet      L.METHOD
// jQuery     jQuery.METHOD  or $('selector').METHOD
// d3       d3.METHOD


mapboxgl.accessToken = 'pk.eyJ1IjoiZXN0aGVyeWFuZyIsImEiOiJhc0lwRTNzIn0.uPn26JQFF7K_8VTund-7Xw';  // replace with your own access token

// Link to a mapbox studio style
var map = new mapboxgl.Map({
  container: 'map',
  minZoom: 10,
  maxZoom: 17,
  style: 'mapbox://styles/estheryang/cj70ubz3k03zu2ro6ub2y0n9z' 
});

// PARKS - INFO WINDOW CHANGES ON HOVER
// code to add interactivity once map loads
map.on('load', function() { // the event listener that does some code after the map loads
  
  // the categories we created from the cville-parks map layer
  var layers = [
    'Regional Park', 
    'Cemetery', 
    'Community Park', 
    'subsidence-distance', 
    'xochimilco-property'
  ];
  
  // the colors we chose to style the parks on the map for each category
  var colors = [
    '#dae8ba', 
    '#c9e392', 
    '#a0ba69', 
    '#809c44', 
    '#485a20'
  ];

  // add a legend to the map
  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }

//display a popup on hover
map.on('load', function() {

    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                        "icon": "theatre"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.038659, 38.931567]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.description)
            .addTo(map);
    });

    map.on('mouseleave', 'places', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
});

//adjust a layer's opacity
var slider = document.getElementById('slider');
var sliderValue = document.getElementById('slider-value');

map.on('load', function() {

    map.addLayer({
        "id": "chicago",
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




