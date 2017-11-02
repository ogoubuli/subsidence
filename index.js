var map = L.map('map').setView([0, 0], 2);

L.tileLayer('./tiles/{z}/{x}/{y}.png', {
 minZoom: 1,
  maxZoom: 6,
  attribution: 'Soil Condition by Xingyu Yang',
  tms: true
}).addTo(map);

var Aquifer = new L.GeoJSON.AJAX("aquifer.json")
Aquifer.addTo(map);