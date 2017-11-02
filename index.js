var map = L.map('map').setView([0, 0], 2);

L.tileLayer('./tiles/{z}/{x}/{y}.png', {
 minZoom: 1,
  maxZoom: 6,
  attribution: 'Soil Condition by Xingyu Yang',
  tms: true
}).addTo(map);

// <<<<<<< HEAD
var Aquifer = new L.GeoJSON.AJAX("aquifer.json")
Aquifer.addTo(map);
// =======
var map = L.map('map', {
  crs: L.CRS.Simple
}).setView([0, 0], 2);

L.tileLayer('./tiles/{z}/{x}/{y}.png', {
 minZoom: 1,
  maxZoom: 6,
  attribution: 'Soil Condition by Xingyu Yang',
  tms: true
}).addTo(map);

var myRenderer = L.svg({ padding: 0.5});
var line = L.polyline()

var yx = L.latLng;

  var xy = function(x, y) {
    if (L.Util.isArray(x)) {    // When doing xy([x, y]);
      return yx(x[1], x[0]);
    }
    return yx(y, x);  // When doing xy(x, y);
  };

  var bounds = [xy(-25, -26.5), xy(1023, 1021.5)];
  var img = [
  7747,
  8406
  ]

var sol      = xy(175.2, 145.0);
  var mizar    = xy( 41.6, 130.1);
  var kruegerZ = xy( 13.4,  56.5);
  var deneb    = xy(218.7,   8.3);

  L.marker(     sol).addTo(map).bindPopup(      'Sol');
  L.marker(   mizar).addTo(map).bindPopup(    'Mizar');
  L.marker(kruegerZ).addTo(map).bindPopup('Krueger-Z');
  L.marker(   deneb).addTo(map).bindPopup(    'Deneb');

  var travel = L.polyline([sol, deneb]).addTo(map);
// >>>>>>> 2c7a00ab3be992717e5b10a54b54b9f8fa36b594
