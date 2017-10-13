// for use with browserify / webpack
var L = require('leaflet')
L.RasterCoords = require('leaflet-rastercoords')

var img = [
  7800,  // original width of image (here from `example/karta.jpg`)
  8400   // original height of image
]
// create the map
var map = L.map('map') {
  minZoom:minZoom,
  maxZoom:maxZoom,
}

// assign map and image dimensions
var rc = new L.RasterCoords(map, img)
// set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
map.setMaxZoom(rc.zoomLevel())
// all coordinates need to be unprojected using the `unproject` method
// set the view in the lower right edge of the image
map.setView(rc.unproject([img[0], img[1]]), 2)

// set markers on click events in the map
map.on('click', function (event) {
  // any position in leaflet needs to be projected to obtain the image coordinates
  var coords = rc.project(event.latlng)
  var marker = L.marker(rc.unproject(coords))
    .addTo(map)
  marker.bindPopup('[' + Math.floor(coords.x) + ',' + Math.floor(coords.y) + ']')
    .openPopup()
})

// the tile layer containing the image generated with `gdal2tiles --leaflet -p raster -w none <img> tiles`
L.tileLayer('./tiles/{z}/{x}/{y}.png', {
  noWrap: true
}).addTo(map)