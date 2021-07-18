// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
// Adding a tile layer (the background map image) to our map
var initialLayer = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "light-v10",
    accessToken: API_KEY
}).addTo(myMap);

// Store our API endpoint inside queryUrl
var query_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
console.log(queryUrl)

// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
// Once we get a response, send the data.features object to the createFeatures function
createFeatures(data.features);
});
  
  //function createFeatures(earthquakeData) {
  
// Define a function we want to run once for each feature in the features array
// Give each feature a popup describing the place and time of the earthquake
   //function onEachFeature(feature, layer) {
   //layer.bindPopup("<h3>" + feature.properties.place + "</h3>")
//});
