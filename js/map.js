mapboxgl.accessToken = 'pk.eyJ1Ijoic2ZhbHRlcjIwMjEiLCJhIjoiY2tyM2x5anQ2MWoyMzJ4bGR0dHpxN2ZtYiJ9.V3SJC8WuShc1rkPtMyvTAQ';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-73.9632, 40.7794],
zoom: 13
});


map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'
    );
